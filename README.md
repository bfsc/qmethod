# Qmethod

Qmethod is a customizable tool for Q-methodology based surveys.
Qmethod allows users to create their own q-methodology survey by customizing XML files. 

>"Q-methodology (also known as Q-sort) is the systematic study of participant viewpoints. Q-methodology is used to investigate the perspectives of participants who represent different stances on an issue, by having participants rank and sort a series of statements."<sup>[1](#qme)</sup>

Qmethod works by parsing xml files. The xml files located at src/settings defines the configurations for starting pages, statements, normal distribuition and the final survey. The user may edit these xml files to make his own survey.

# Requirements

We need:

* Python 3
* Git

# Installing

## UNIX based systems (GNU/Linux, MacOS)

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

## Windows 7/8/10:

Clone the repository using Github app.

You may use the same python 3 trick or download, install and then use Fenix web server: http://fenixwebserver.com/

<a name="qme">1</a>: https://www.betterevaluation.org/en/evaluation-options/qmethodology


For more information on how to configure and run Qmethod, head to the [wiki](https://github.com/bfsc/qmethod/wiki) or
download our [guide.](https://github.com/bfsc/qmethod/blob/res/res/getting-started.pdf)

# Citation

If you plan to use this tool in a research project, please do not forget to cite the corresponding work as follows:

BibTeX
```
@INPROCEEDINGS {cartaxo2019esem,
    author    = "Bruno Cartaxo, Gustavo Pinto, Baldoino Fonseca, Márcio Ribeiro, Pedro Pinheiro, Sergio Soares and Maria Teresa Baldassarre",
    title     = "Software Engineering Research Community Viewpoints on Rapid Reviews",
    booktitle = "Proceedings of the 13th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)",
    year      = "2019",
    series    = "ESEM '19"
}
```

MLA
```
Cartaxo, Bruno, et al. "Software Engineering Research Community Viewpoints on Rapid Reviews." 2019 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM). IEEE, 2019.
```


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
