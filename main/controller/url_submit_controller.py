from django.utils import timezone

from main.models import LogReport


class UrlSubmitController:

    def __init__(self, url_submitted):
        self.url_submitted = url_submitted
        self.log_report = None

    #################
    # Main Function #
    #################
    def validate(self):
        # Initiate Log Report
        self.create_log_report()

        # Validate url
        res = self.validate_url()
        if not res['success']:
            return {
                'success': False,
                'log_report': self.log_report
            }

        # Add exp & check level up
        self.update_exp_and_check_level()

        # Save completed time and return success
        self.log_report.ts_report_completed = timezone.now()
        self.log_report.save()

        return {
            'success': True,
            'log_report': self.log_report
        }

    def create_log_report(self):
        if LogReport.objects.exists():
            latest_instance = LogReport.objects.latest('pk')
            print(LogReport.objects.values().latest('pk'))
            self.log_report = LogReport(
                character_id=latest_instance.character_id,
                level=latest_instance.level,
                exp=latest_instance.exp,
                url_submitted=self.url_submitted
            )
            self.log_report.save()

        else:  # If this is first time submitting url
            self.log_report = LogReport(
                character_id=1,
                level=1,
                exp=0,
                url_submitted=self.url_submitted
            )
            self.log_report.save()

        return {'success': True}

    def validate_url(self):

        required_srt = "leetcode.com"

        if required_srt in self.url_submitted:
            self.log_report.is_successfully_validated=True
            self.log_report.save()

            return {'success': True}

        else:
            self.log_report.is_successfully_validated=False
            self.log_report.save()

            return {'success': False}

    def update_exp_and_check_level(self):

        self.log_report.exp += 20

        # check if exp is 100
        if self.log_report.exp == 100:
            # reset exp to 0
            self.log_report.exp = 0

            # check if level is 3
            if self.log_report.level == 3:
                self.log_report.level = 1

                # 아직까지 캐릭터 3개 뿐이므로 , 룹
                if self.log_report.character_id == 3:
                    self.log_report.character_id = 1
                else:
                    self.log_report.character_id += 1
            else:
                self.log_report.level += 1

        self.log_report.save()
