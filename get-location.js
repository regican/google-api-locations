;var getLocation = function (options) {
	options = options || {};
	options.on = options.on || 'onkeyup';
	options.replace = options.replace || true;
	
	options.id = options.id || false;
	options.city = options.city || false;
	options.state = options.state || false;
	options.country = options.country || false;
	
	if (!options.id) return;
	
	var field = document.getElementById(options.id);
	field[options.on] = function(){
		var zip = field.value;
		if (zip.length < 5) return;
		
		var location = {}, 
			i = found = 0,
			geocoder = new google.maps.Geocoder();
		
		geocoder.geocode({
			'address': zip 
		}, 
		function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results.length >= 1) {
					for (i = 0; i < results[0].address_components.length; i++) {
						switch(results[0].address_components[i].types.join(",")){
							case 'postal_code':
							case 'postal_code_prefix,postal_code':
								location.zip = results[0].address_components[i].long_name;    
							break;
							
							case 'sublocality,political':
							case 'locality,political':
							case 'neighborhood,political':
							case 'administrative_area_level_3,political':
								location.city = results[0].address_components[i].long_name;
								found ++;
							break;
							
							case 'administrative_area_level_1,political':
								location.state = results[0].address_components[i].short_name;
								found ++;
							break;
							
							case 'country,political':
								location.country = results[0].address_components[i].long_name;
								found ++;
							break;
						}
					}
					
					if (found > 2 && options.replace){
						if (options.city)
						document.getElementById('city').value = location.city;
						
						if (options.state)
						document.getElementById('state').value = location.state;
						
						if (options.country)
						document.getElementById('country').value = location.country;
					}
				}
			}
		});
		
		return location;
	};
}