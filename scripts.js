let imagesData = [
  {
    photo: 'images/DSC_1092.JPG',
    title: 'Aliquam erat volutpat',
    description: 'Vestibulum in leo scelerisque, mollis mi eget, pellentesque nisi. Nulla interdum posuere ex, non feugiat sapien aliquet eu. Curabitur et odio est. Integer sit amet risus sit amet lacus efficitur tempus. Sed vel porta lorem. Pellentesque leo justo, vestibulum in lectus eu, consectetur eleifend urna.'
  },
  {
    photo: 'images/DSC_0267.JPG',
    title: 'Proin non neque mattis velit',
    description: 'Cras gravida at elit eu maximus. Suspendisse placerat urna arcu. Nullam pellentesque, elit eget eleifend luctus, quam orci fermentum velit, at condimentum dolor risus ut elit.'
  },
  {
    photo: 'images/DSC_2889.JPG',
    title: 'Dolor ut fringilla magna',
    description: 'Maecenas ac orci eu lectus vehicula porttitor non sit amet turpis. Aliquam erat volutpat. Aenean sed ultricies tortor, vitae suscipit risus.'
  },
  {
    photo: 'images/DSC_5813.JPG',
    title: 'Cras iaculis ut leo ut fringilla',
    description: 'Aliquam in dignissim nisl, a facilisis diam. Suspendisse placerat auctor sem, eget dapibus justo sagittis non. Morbi dignissim enim venenatis sem volutpat tempor. Sed malesuada vitae libero sit amet gravida. '
  },
  {
    photo: 'images/DSC_7285.JPG',
    title: 'Fusce elementum pellentesque magna eget scelerisque',
    description: 'Maecenas laoreet dolor vel volutpat consequat. Aenean nec lobortis odio. Aenean vel laoreet justo. Maecenas pretium leo leo, eu auctor lectus suscipit commodo. '
  },
  {
    photo: 'images/DSC_8194.JPG',
    title: 'Pellentesque at auctor enim',
    description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ornare augue quis leo aliquam imperdiet. Dignissim enim venenatis.'
  },
  {
    photo: 'images/DSC_8299.JPG',
    title: 'Nullam pellentesque',
    description: 'Donec porta eros eu dapibus dapibus. Aenean vitae sem sem. Nam ut est vehicula, viverra velit et, elementum felis. Pellentesque nec finibus nisi. Cras a felis vel magna rutrum venenatis.'
  },
  {
    photo: 'images/DSC_8741.JPG',
    title: 'Praesent quis ipsum ultricies',
    description: 'Nunc lacinia orci diam, mollis dictum purus posuere quis. Fusce at fringilla sapien. Proin eu mauris eget neque egestas efficitur ac ac odio. '
  }
  ];

let imgIndex = 0;
for (let i = 0; i < imagesData.length; i++) {
  let img = $('<img />').attr({
  'id': imgIndex,
    'src': `${imagesData[i].photo}`,
   'title': `${imagesData[i].title}`,
    }).appendTo('.thumbnails');
    imgIndex++;
   };


//let imgIndex = 0;
//for (let i = 0; i < imagesData.length; i++) {
//    $('.thumbnails').append("<p class='img-container'><img  id=" +imgIndex+" src=" +imagesData[i].photo+ " title="+ imagesData[i].title+ "></p>");
//    imgIndex++;
//  };

//let imgIndex = 0;
//for (let i = 0; i < imagesData.length; i++) {
//    $('.thumbnails').append("<img  id=" +imgIndex+" src=" +imagesData[i].photo+ " title="+ imagesData[i].title+ ">");
//    $('.thumbnails').append("<p class=" +imgIndex+"> </p>");
//   $('.' +imgIndex).text(`${imagesData[i].title}`);
//    imgIndex++;
//  };

let currentPhoto = 0;
let loadPhoto = (photoNumber) => {
  $ ('.thumbnails img').css('top', '0px');
  $ ('.thumbnails img').css('border', '0px');
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(`${imagesData[currentPhoto].title}`);
  $('#photo-description').text(`${imagesData[currentPhoto].description}`);
  $ ('#'+ currentPhoto).css('top', '-15px');
  $ ('#'+ currentPhoto).css('borderTop', '7px solid transparent');
  $ ('#'+ currentPhoto).css('borderImage', 'url(1200px-White_triangle.svg.png) 18%');
  $ ('#'+ currentPhoto).css('top', '-15px');
  };
loadPhoto(currentPhoto);


let currentPhotoMax = imagesData.length; 
$('#next-button').click(() => {
  $ ('#next-button img').css('opacity', "0.4");
  $ ('#previous-button img').css('opacity', "1");
  if (currentPhoto < currentPhotoMax-1) {
    currentPhoto++;
    }
    else {
      currentPhoto = 0;
    }
  loadPhoto(currentPhoto);
  });

$('#previous-button').click(() => {
  $ ('#previous-button img').css('opacity', "0.4");
  $ ('#next-button img').css('opacity', "1");
  if (currentPhoto ===0 ) {
    currentPhoto = currentPhotoMax-1;
    }
    else {
      currentPhoto = currentPhoto-1;
    }
    loadPhoto(currentPhoto);
  });

$('.thumbnails').click((event) => {
  currentPhoto = $(event.target).attr('id');
  loadPhoto(currentPhoto);
  });


