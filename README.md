# REACT-EMI-CALCULATOR
<a href="https://github.com/falendra/react-emi-calculator/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/falendra/react-emi-calculator.svg?style=popout"></a>
<a href="https://github.com/falendra/react-emi-calculator/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/falendra/react-emi-calculator.svg?style=popout-square"></a>
<a href="https://github.com/falendra/react-emi-calculator/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/falendra/react-emi-calculator.svg?style=popout-square"></a>



This is React.js EMI calculator. It takes input from user and fetch calculated data using API & display them.


![alt text](https://raw.githubusercontent.com/falendra/react-emi-calculator/master/react-emi-calculator.png)


(It's just an example)

This reusable react component could be used in any App where such an calculation is needed.

How to run it locally from command line

- Clone this repo git clone https://github.com/falendra/react-emi-calculator.git
- cd react-emi-calculator
- run npm install
- npm start  

Link to live example: https://react-emi-calculator.web.app/
Use as follows:

 <EmiCalculator /> 
 
Example of props:  {...}
 
        valueD={6}  - duration of loan in months , default - 6
        stepD={1}  - step of duration of loan slider in months, default - 1
        maxD: 24    - max value of duration of loan slider in moths , default - 24
        minD: 6    - min value of duration of loan slider in moths , default - 
        valueA={500}  - amount of loan in currancy choosen , default - $500
        stepA={100} - step of amount of loan slider in currancy choosen , default - $100
        maxA={5000}   - max value  of amount of loan slider in currancy choosen , default - $5000
        minA={500}   - min value of amount of loan slider in months , default - $500
        
        

