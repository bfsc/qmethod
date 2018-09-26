# Qmethod

Qmethod is a customizable tool for Q-methodology based surveys.
Qmethod allows users to create their own q-methodology survey by customizing XML files. 

>"Q-methodology (also known as Q-sort) is the systematic study of participant viewpoints. Q-methodology is used to investigate the perspectives of participants who represent different stances on an issue, by having participants rank and sort a series of statements."<sup>[1](#qme)</sup>

Qmethod works by parsing xml files. The xml files located at src/settings defines the configurations for starting pages, statements, normal distribuition and the final survey. The user may edit these xml files to make his own survey.

## Requirements

We need:

* Python 3
* Git

## Installing

### UNIX based systems (GNU/Linux, MacOS)

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

### Windows 7/8/10:

Clone the repository using Github app.

You may use the same python 3 trick or download, install and then use Fenix web server: http://fenixwebserver.com/

<a name="qme">1</a>: https://www.betterevaluation.org/en/evaluation-options/qmethodology

# License  
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
