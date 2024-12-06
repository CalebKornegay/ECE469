all: clean tar

clean:
	rm -rf submission
	rm -rf submission.tar.gz

tar:
	mkdir submission
	cp -r Accelerometer_Logger submission
	mkdir submission/analysis
	cp -r analysis/old_stuff submission/analysis
	cp -r analysis/ref submission/analysis
	cp -r analysis/setup submission/analysis
	cp -r .gitignore submission/analysis
	cp -r analysis/accel_gender_analysis.py submission/analysis
	cp -r analysis/accel_gender_equality_analysis.py submission/analysis
	cp -r analysis/accel_number_analysis.py submission/analysis
	cp -r analysis/accel_number_equality_analysis.py submission/analysis
	cp -r analysis/accel_person_analysis.py submission/analysis
	cp -r analysis/data.tar.gz submission/analysis
	cp -r analysis/README.md submission/analysis
	cp -r analysis/requirements.txt submission/analysis
	cp -r Makefile submission
	cp -r README.md submission
	cp -r .gitignore submission

	tar -cvf submission.tar.gz submission
