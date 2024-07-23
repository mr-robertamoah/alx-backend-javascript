export default function createIteratorObject(report) {
	return (function* _() {
		for (const employeesPerDepart of Object.values(report.allEmployees)) {
			for (const employee of employeesPerDepart) {
				yield employee;
			}
		}
	}());
}
