let data = {
  photo: 'images/photo1.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
};

$('#photo').attr('src', data.photo);





//*
let countNumber = 0;
document.getElementById("button1").addEventListener("click", function() {
    countNumber = countNumber+1;
    $('h2').text(`${countNumber}`);
      });
document.getElementById("button2").addEventListener("click", function() {
        countNumber = countNumber-1;
        $('h2').text(`${countNumber}`);
          });