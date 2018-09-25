# Qmethod

Qmethod is a customizable tool for Q-methodology based surveys.
Qmethod allows users to create their own q-methodology survey by customizing XML files. 

>"Q-methodology (also known as Q-sort) is the systematic study of participant viewpoints. Q-methodology is used to investigate the perspectives of participants who represent different stances on an issue, by having participants rank and sort a series of statements."<sup>[1](#qme)</sup>

Qmethod works by parsing xml files. The xml files located at src/settings defines the configurations for starting pages, statements, normal distribuition and the final survey. The user may edit these xml files to make his own survey.

Running locally:

UNIX based systems (GNU/Linux, MacOS):

Clone the repository
```
git clone https://github.com/bfsc/qmethod
```
Install Python 3 and then
```
cd qmethod
python3 -m http.server 8080 --bind 127.0.0.1 
```
Then, you may access by typing on your browser address bar: 127.0.0.1:8080

Windows 7/8/10:
Clone the repository using Github app.

You may use the same python 3 trick or download, install and then use Fenix web server: http://fenixwebserver.com/

<a name="qme">1</a>: https://www.betterevaluation.org/en/evaluation-options/qmethodology
