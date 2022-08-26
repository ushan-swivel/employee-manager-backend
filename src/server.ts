import App from '@/app';
import IndexRoute from '@routes/index.route';
import validateEnv from '@utils/validateEnv';
import EmployeeRoute from '@routes/employee.route';

validateEnv();

const app = new App([new IndexRoute(), new EmployeeRoute()]);

app.listen();
