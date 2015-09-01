(function($) {
  Drupal.behaviors.select2 = {
    attach: function(context) {
      var minWidth = Drupal.settings.select2.minimum_width;
      //define options
      var options = {width:"element"};
      //options.createSearchChoice = Drupal.settings.select2.search_contains;//???
      options.placeholder_text_multiple = Drupal.settings.select2.placeholder_text_multiple;
      options.placeholder_text_single = Drupal.settings.select2.placeholder_text_single;
      options.formatNoMatches = function(term){return Drupal.settings.select2.no_results_text;};
	  options.escapeMarkup = function(m) { return m; };
	  Drupal.select2.options = options;
	  
      Drupal.select2.applyToAll(context);
       
      //enable Select2 for widgets
	  var options0;
      $('.select2-widget', context).each(function() {
		if($(this).width()<minWidth){
			$(this).width(minWidth);
		}
		options0 = options;
		options0.width = $(this).width()+'px';
        $(this).select2(options0);
      });
    }
  }
  
  Drupal.select2 = {

    options: {},

    select2On: function(select){
        var minWidth = Drupal.settings.select2.minimum_width;
		var format = function format(state) {
			var str0 = state.text;
			//console.log(str0);
			var pos = str0.indexOf("|");
			if(pos != -1){
				return str0.substr(0,pos)+"<i class='icon-"+str0.substr(pos+1)+"'></i>";
			}
			return state.text;
		}
	   	select.each(function() {
			var options0 = Drupal.select2.options;
			if($(this).attr("id") == 'edit-field-thematics-tid' || $(this).attr("id") == 'edit-tid' || $(this).attr("id") == 'edit-field-thematics'){
				options0.formatResult = format;
				options0.formatSelection = format;
			}
			if($(this).width()<minWidth){
				$(this).width(minWidth);
			}
			options0.width = $(this).width()+'px';
			$(this).select2(options0);
		});
	},
	applyToAll: function(context){
        	this.select2On($(Drupal.settings.select2.selector, context).not(Drupal.settings.select2.selector_not));
	}
  }
})(jQuery);
