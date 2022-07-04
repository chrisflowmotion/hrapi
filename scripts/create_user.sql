CREATE USER 'hr_app_api'@'localhost' IDENTIFIED BY 'VIy38ivOk1';

GRANT ALL PRIVILEGES ON hr_app.hremployee TO 'hr_app_api'@'localhost';
GRANT ALL PRIVILEGES ON hr_app.hremergencycontacts TO 'hr_app_api'@'localhost';
GRANT ALL PRIVILEGES ON hr_app.hrholidayrequests TO 'hr_app_api'@'localhost';
GRANT ALL PRIVILEGES ON hr_app.hrsickdays TO 'hr_app_api'@'localhost';

flush privileges;