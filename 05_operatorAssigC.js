

var interviewEligibility = function(gredScore, hscScore, sscScore, candidateName) {
    var result = (gredScore>=70) || (hscScore>=80) || (sscScore>90)  ?  `Congrates ${candidateName} you are eligible for TCS intrview `:`Unfortuntely ${candidateName} you are not eligible for interview`;
    console.log(result);
 }
 interviewEligibility(80,86,90,"Nisha");
 interviewEligibility(70,65,55,"Bharti");
 interviewEligibility(60,79,88,"Ritika");
 