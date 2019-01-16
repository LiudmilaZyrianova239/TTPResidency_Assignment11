function generateSuccessHTMLOutput(response) {
    console.log (JSON.stringify(response.data, null, '\t'));
    return  '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';

}
  
function generateErrorHTMLOutput(error) {
    return  '<h4>Error:</h4>' +'<pre>' + error.message + '</pre>'
}




function clearAllStudents() {
    var resultElement = document.getElementById('resultDataStudent');
    resultElement.innerHTML = '';
} 

function doGetStudents(){
    var resultElement = document.getElementById('resultDataStudent');
    resultElement.innerHTML = '';
  
    axios.get('http://localhost:3000/api/input/student')
      .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      });
  }



  document.getElementById('inputFormStudent').addEventListener('submit', doPostS);
  function doPostS(e) {
    var resultElement = document.getElementById('resultDataStudent');
    var fname = document.getElementById('inputLineStudentFName').value;
    var lname = document.getElementById('inputLineStudentLName').value;
    var email = document.getElementById('inputLineStudentEmail').value;
    var imageURLS = document.getElementById('inputLineStudentImageURL').value;
    var gpa = document.getElementById('inputLineStudentGPA').value;
    var cID = document.getElementById('inputLineStudentCampus').value;
    resultElement.innerHTML = '';

    
    gpa = parseFloat(gpa);
    cID = parseFloat(cID);

    document.getElementById('inputLineStudentFName').value = '';
    document.getElementById('inputLineStudentLName').value = '';
    document.getElementById('inputLineStudentEmail').value = '';
    document.getElementById('inputLineStudentImageURL').value = '';
    document.getElementById('inputLineStudentGPA').value = '';
    document.getElementById('inputLineStudentCampus').value = '';
    
    axios.post('http://localhost:3000/api/input/student', {
      "firstName": fname,
      "lastName": lname,
      "email": email,
      "imageURL": imageURLS,
      "gpa": gpa,
      "campusID": cID
      })
    .then(function(response) {
      //resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
    e.preventDefault();
  }













  function clearAllCampuses() {
    var resultElement = document.getElementById('resultDataCampus');
    resultElement.innerHTML = '';
} 
function clearParCampus() {
  var resultElement = document.getElementById('resultDataParCampus');
  var resultElementFrom = document.getElementById('resultDataFromCampus');
  resultElement.innerHTML = '';
  resultElementFrom.innerHTML = '';
} 

function doGetCampuses(){
    var resultElement = document.getElementById('resultDataCampus');
    resultElement.innerHTML = '';
  
    axios.get('http://localhost:3000/api/input/campus')
      .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      });
  }



  document.getElementById('inputFormCampus').addEventListener('submit', doPost);
  function doPost(e) {
    var resultElement = document.getElementById('resultDataCampus');
    var name = document.getElementById('inputLineCampusName').value;
    var imageURL = document.getElementById('inputLineCampusImageURL').value;
    var address = document.getElementById('inputLineCampusAddress').value;
    var description = document.getElementById('inputLineCampusDescription').value;
    resultElement.innerHTML = '';
  
    document.getElementById('inputLineCampusName').value = '';
    document.getElementById('inputLineCampusImageURL').value = '';
    document.getElementById('inputLineCampusAddress').value = '';
    document.getElementById('inputLineCampusDescription').value = '';
    axios.post('http://localhost:3000/api/input/campus', {
        "name": name,
        "imageURL": imageURL,
        "address": address, 
        "description": description
      })
    .then(function(response) {
      //resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
    e.preventDefault();
  }


  
  document.getElementById('inputFormCampusParticular').addEventListener('submit', doPostPart);
  function doPostPart(e) {
    var resultElement = document.getElementById('resultDataParCampus');
    var resultElementFrom = document.getElementById('resultDataFromCampus');
    var id = document.getElementById('inputLineCampusID').value;
    resultElement.innerHTML = '';
    resultElementFrom.innerHTML = `Students from campus with ID = ${id}`;
    document.getElementById('inputLineCampusID').value = '';
  
    axios.get(`http://localhost:3000/api/input/campus/withstudents/${id}`)
    .then(function(response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
    e.preventDefault();
  }
  

  
