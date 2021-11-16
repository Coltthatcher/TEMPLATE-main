import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){
  $('#search').click(function(){
    const searchResults = $('#input').val();
    $('#input').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchResults}&api_key=KjU0nKpr1bYqn6lhjY7NWehiwTHe9CfF`
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGifs').html(`<iframe src="${response.data[0].embed_url}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`);
    }

  });
});
  $(document).ready(function(){
    $('#trending').click(function(){
    
  
      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/trending?api_key=KjU0nKpr1bYqn6lhjY7NWehiwTHe9CfF`
      
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      };
      request.open("GET", url, true);
      request.send();
  
      function getElements(response) {
        $('.trendingGifs').html(`<iframe src="${response.data[0].embed_url}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`);
      }
    });

    
});
$(document).ready(function(){
  $('#random').click(function(){
  

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/random?api_key=KjU0nKpr1bYqn6lhjY7NWehiwTHe9CfF`
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.randomGifs').html(`<iframe src="${response.data.embed_url}" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`);
    }
  
  });
});