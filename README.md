##Retrieve location info using Google maps API
Using a zip/postal code, retrieve the country, state/province and city.

###Usage

	<script src="https://maps.google.com/maps/api/js?sensor=false"></script>
	<script src="get-location.min.js"></script>
	<script>
	getLocation({
		on: 'onkeyup',
		id: 'zip',
	
		city:		'city',
		state:		'state',
		country: 	'country'
	});
	</script>


###Function Documentation
Function: getLocation( object );

| Parameter | Default Value | Description |
| ----------| ------------- | ----------- |
| id |   | (required)  ID of Zip/Postal code field to be filled in | 
| on | keyup | (optional) field listener on when to trigger function. Possible values: onclick, onchange, onkeyup, onkeydown |
| replace | true | (optional) change value of city, state and country fields using the supplied IDs. |
| city |   | (required) ID of the city field to be automatically populated |
| state |   | (required) ID of the state field to be automatically populated |
| country |   | (required) ID of the country field to be automatically populated |
