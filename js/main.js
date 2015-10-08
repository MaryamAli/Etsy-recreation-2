
// // var firstItem =etsydata.results[0];
// // console.log(firstItem);
// var templateString = ('#itemTemplate').text();

// var templateFunction = _.template(templateString);

// // var itemHTML = templateFunction(firstItem);

// // $('.container').html(itemHTML);




// _.each(etsydata.results, function(item){
//   // console.log('item');
//   var itemHTML = templateFunction(item);
//   $('.searchResults').append(itemHTML);
// });
  // console.log('It Works!');

  (function () {

 var templateString = $('#itemTemplate').text();

 var templateFunction = _.template(templateString);


_.each(etsydata.results, function (item) {
 var itemHTML = templateFunction(item);
 var imgUrl = item.Images[0].url_570xN
 $('.searchResults').append(itemHTML);
 $('.images').append(itemHTML);
});




}());





