
// var firstItem =etsydata.results[0];
// console.log(firstItem);
// var templateString = ('#itemTemplate').text();

// var templateFunction = _.template(templateString);

// var itemHTML = templateFunction(firstItem);

// $('.container').html(itemHTML);




// _.each(etsydata.results, function(item){
//   console.log('item');
//   var itemHTML = templateFunction(item);
//   $('.searchResults').append(itemHTML);
// });
//   console.log('It Works!');



(function () {

 var templateString = $('#itemTemplate').text();

 var templateFunction = _.template(templateString);



_.each(etsydata.results, function(item) {
  // console.log('item');
 var itemHTML = templateFunction(item);
 var imgUrl = item.Images[0].url_570xN;
 $('.mainContentItems').append(itemHTML);
 // $('.images').append(imageHTML);
 
});


}());


//   <div class ='searchResults'></div>
// <div class='images'></div> 


//   <script type="text/template" id='itemTemplate'>

//     <div>
//       <p>
//         <%=Images[0].url_570xN%>
//           // <img src="<%=Images[0].url_570xN%>">
//           <%=title%>
//       </p>
//       <p class='price'>
//         $
//         <%=price%>
//       </p>
//       <p class='description'>
//         <%=description %>
//       </p>
//             <p class='Shop.shop_name'>
//         <%=shopName %>
//       </p>
//       <p class='title'>
//         <%=title%>
//       </p>
//       <p class='link'>
//         <%=url%>
//       </p>
//     </div>
//     <hr>


//   </script>


//   <script type="text/template" id="item-template">
//     <li class="item">
//       Item Name:
//       <%=name %>
//     </li>
//     <li class='shop_name'>
//       Shop Name:
//       <%=shopName %>
//       </li>
//     </script>


