$(document).ready(function() {
	function randomQuote() {
		$.ajax({
			url: "http://api.forismatic.com/api/1.0/",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function(quote) {
				var string = TrimString(quote.quoteText);
				$('#quote').html('&ldquo;'+string+'&rdquo;'); //Inserts quote into HTML
				
				if(quote.quoteAuthor === "") {								//Inserts author into HTML
					$('#author').html("- Unknown");
				}
				else {
					$('#author').html("- " + quote.quoteAuthor);
				}
			}
		});
	}

	randomQuote();

	$('#GetQuote').click(function() {
		randomQuote();
	});
	
	//Trims whitespace from a string
	function TrimString(x) {
		return x.replace(/^\s+|\s+$/gm,'');
	}
	
	//Send Quote to Twitter
	//Original Script by Dhananjay Kumar
	//http://debugmode.net/2012/06/27/how-to-post-a-tweet-using-javascript/
	 $('#btnTweet').click(function (e) {
		 var quote = $('#quote').text();
		 var textToTweet = quote.concat($('#author').text()," goo.gl/FGrrTz");
		 
		 var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
		 window.open(twtLink,'_blank');
	 });
	
	//
});