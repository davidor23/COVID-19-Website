//country codes to support charts
const isoCodes = [
{iso3: "AFG",iso2: "AF",name: "Afghanistan"},
{iso3: "ALB",iso2: "AL",name: "Albania"},
{iso3: "DZA",iso2: "DZ",name: "Algeria"},
{iso3: "ASM",iso2: "AS",name: "American Samoa"},
{iso3: "AND",iso2: "AD",name: "Andorra"},
{iso3: "AGO",iso2: "AO",name: "Angola"},
{iso3: "AIA",iso2: "AI",name: "Anguilla"},
{iso3: "ATA",iso2: "AQ",name: "Antarctica"},
{iso3: "ATG",iso2: "AG",name: "Antigua and Barbuda"},
{iso3: "ARG",iso2: "AR",name: "Argentina"},
{iso3: "ARM",iso2: "AM",name: "Armenia"},
{iso3: "ABW",iso2: "AW",name: "Aruba"},
{iso3: "AUS",iso2: "AU",name: "Australia"},
{iso3: "AUT",iso2: "AT",name: "Austria"},
{iso3: "AZE",iso2: "AZ",name: "Azerbaijan"},
{iso3: "BHS",iso2: "BS",name: "Bahamas"},
{iso3: "BHR",iso2: "BH",name: "Bahrain"},
{iso3: "BGD",iso2: "BD",name: "Bangladesh"},
{iso3: "BRB",iso2: "BB",name: "Barbados"},
{iso3: "BLR",iso2: "BY",name: "Belarus"},
{iso3: "BEL",iso2: "BE",name: "Belgium"},
{iso3: "BLZ",iso2: "BZ",name: "Belize"},
{iso3: "BEN",iso2: "BJ",name: "Benin"},
{iso3: "BMU",iso2: "BM",name: "Bermuda"},
{iso3: "BTN",iso2: "BT",name: "Bhutan"},
{iso3: "BOL",iso2: "BO",name: "Bolivia, Plurinational State of"},
{iso3: "BOL",iso2: "BO",name: "Bolivia"},
{iso3: "BIH",iso2: "BA",name: "Bosnia and Herzegovina"},
{iso3: "BWA",iso2: "BW",name: "Botswana"},
{iso3: "BVT",iso2: "BV",name: "Bouvet Island"},
{iso3: "BRA",iso2: "BR",name: "Brazil"},
{iso3: "IOT",iso2: "IO",name: "British Indian Ocean Territory"},
{iso3: "BRN",iso2: "BN",name: "Brunei Darussalam"},
{iso3: "BRN",iso2: "BN",name: "Brunei"},
{iso3: "BGR",iso2: "BG",name: "Bulgaria"},
{iso3: "BFA",iso2: "BF",name: "Burkina Faso"},
{iso3: "BDI",iso2: "BI",name: "Burundi"},
{iso3: "KHM",iso2: "KH",name: "Cambodia"},
{iso3: "CMR",iso2: "CM",name: "Cameroon"},
{iso3: "CAN",iso2: "CA",name: "Canada"},
{iso3: "CPV",iso2: "CV",name: "Cape Verde"},
{iso3: "CYM",iso2: "KY",name: "Cayman Islands"},
{iso3: "CAF",iso2: "CF",name: "Central African Republic"},
{iso3: "TCD",iso2: "TD",name: "Chad"},
{iso3: "CHL",iso2: "CL",name: "Chile"},
{iso3: "CHN",iso2: "CN",name: "China"},
{iso3: "CXR",iso2: "CX",name: "Christmas Island"},
{iso3: "CCK",iso2: "CC",name: "Cocos (Keeling) Islands"},
{iso3: "COL",iso2: "CO",name: "Colombia"},
{iso3: "COM",iso2: "KM",name: "Comoros"},
{iso3: "COG",iso2: "CG",name: "Congo"},
{iso3: "COD",iso2: "CD",name: "Congo, the Democratic Republic of the"},
{iso3: "COK",iso2: "CK",name: "Cook Islands"},
{iso3: "CRI",iso2: "CR",name: "Costa Rica"},
{iso3: "CIV",iso2: "CI",name: "Côte d'Ivoire"},
{iso3: "CIV",iso2: "CI",name: "Ivory Coast"},
{iso3: "HRV",iso2: "HR",name: "Croatia"},
{iso3: "CUB",iso2: "CU",name: "Cuba"},
{iso3: "CYP",iso2: "CY",name: "Cyprus"},
{iso3: "CZE",iso2: "CZ",name: "Czech Republic"},
{iso3: "DNK",iso2: "DK",name: "Denmark"},
{iso3: "DJI",iso2: "DJ",name: "Djibouti"},
{iso3: "DMA",iso2: "DM",name: "Dominica"},
{iso3: "DOM",iso2: "DO",name: "Dominican Republic"},
{iso3: "ECU",iso2: "EC",name: "Ecuador"},
{iso3: "EGY",iso2: "EG",name: "Egypt"},
{iso3: "SLV",iso2: "SV",name: "El Salvador"},
{iso3: "GNQ",iso2: "GQ",name: "Equatorial Guinea"},
{iso3: "ERI",iso2: "ER",name: "Eritrea"},
{iso3: "EST",iso2: "EE",name: "Estonia"},
{iso3: "ETH",iso2: "ET",name: "Ethiopia"},
{iso3: "FLK",iso2: "FK",name: "Falkland Islands (Malvinas)"},
{iso3: "FRO",iso2: "FO",name: "Faroe Islands"},
{iso3: "FJI",iso2: "FJ",name: "Fiji"},
{iso3: "FIN",iso2: "FI",name: "Finland"},
{iso3: "FRA",iso2: "FR",name: "France"},
{iso3: "GUF",iso2: "GF",name: "French Guiana"},
{iso3: "PYF",iso2: "PF",name: "French Polynesia"},
{iso3: "ATF",iso2: "TF",name: "French Southern Territories"},
{iso3: "GAB",iso2: "GA",name: "Gabon"},
{iso3: "GMB",iso2: "GM",name: "Gambia"},
{iso3: "GEO",iso2: "GE",name: "Georgia"},
{iso3: "DEU",iso2: "DE",name: "Germany"},
{iso3: "GHA",iso2: "GH",name: "Ghana"},
{iso3: "GIB",iso2: "GI",name: "Gibraltar"},
{iso3: "GRC",iso2: "GR",name: "Greece"},
{iso3: "GRL",iso2: "GL",name: "Greenland"},
{iso3: "GRD",iso2: "GD",name: "Grenada"},
{iso3: "GLP",iso2: "GP",name: "Guadeloupe"},
{iso3: "GUM",iso2: "GU",name: "Guam"},
{iso3: "GTM",iso2: "GT",name: "Guatemala"},
{iso3: "GGY",iso2: "GG",name: "Guernsey"},
{iso3: "GIN",iso2: "GN",name: "Guinea"},
{iso3: "GNB",iso2: "GW",name: "Guinea-Bissau"},
{iso3: "GUY",iso2: "GY",name: "Guyana"},
{iso3: "HTI",iso2: "HT",name: "Haiti"},
{iso3: "HMD",iso2: "HM",name: "Heard Island and McDonald Islands"},
{iso3: "VAT",iso2: "VA",name: "Holy See (Vatican City State)"},
{iso3: "HND",iso2: "HN",name: "Honduras"},
{iso3: "HKG",iso2: "HK",name: "Hong Kong"},
{iso3: "HUN",iso2: "HU",name: "Hungary"},
{iso3: "ISL",iso2: "IS",name: "Iceland"},
{iso3: "IND",iso2: "IN",name: "India"},
{iso3: "IDN",iso2: "ID",name: "Indonesia"},
{iso3: "IRN",iso2: "IR",name: "Iran, Islamic Republic of"},
{iso3: "IRQ",iso2: "IQ",name: "Iraq"},
{iso3: "IRL",iso2: "IE",name: "Ireland"},
{iso3: "IMN",iso2: "IM",name: "Isle of Man"},
{iso3: "ISR",iso2: "IL",name: "Israel"},
{iso3: "ITA",iso2: "IT",name: "Italy"},
{iso3: "JAM",iso2: "JM",name: "Jamaica"},
{iso3: "JPN",iso2: "JP",name: "Japan"},
{iso3: "JEY",iso2: "JE",name: "Jersey"},
{iso3: "JOR",iso2: "JO",name: "Jordan"},
{iso3: "KAZ",iso2: "KZ",name: "Kazakhstan"},
{iso3: "KEN",iso2: "KE",name: "Kenya"},
{iso3: "KIR",iso2: "KI",name: "Kiribati"},
{iso3: "PRK",iso2: "KP",name: "Korea, Democratic People's Republic of"},
{iso3: "KOR",iso2: "KR",name: "Korea, Republic of"},
{iso3: "KOR",iso2: "KR",name: "South Korea"},
{iso3: "KWT",iso2: "KW",name: "Kuwait"},
{iso3: "KGZ",iso2: "KG",name: "Kyrgyzstan"},
{iso3: "LAO",iso2: "LA",name: "Lao People's Democratic Republic"},
{iso3: "LVA",iso2: "LV",name: "Latvia"},
{iso3: "LBN",iso2: "LB",name: "Lebanon"},
{iso3: "LSO",iso2: "LS",name: "Lesotho"},
{iso3: "LBR",iso2: "LR",name: "Liberia"},
{iso3: "LBY",iso2: "LY",name: "Libyan Arab Jamahiriya"},
{iso3: "LBY",iso2: "LY",name: "Libya"},
{iso3: "LIE",iso2: "LI",name: "Liechtenstein"},
{iso3: "LTU",iso2: "LT",name: "Lithuania"},
{iso3: "LUX",iso2: "LU",name: "Luxembourg"},
{iso3: "MAC",iso2: "MO",name: "Macao"},
{iso3: "MKD",iso2: "MK",name: "Macedonia, the former Yugoslav Republic of"},
{iso3: "MDG",iso2: "MG",name: "Madagascar"},
{iso3: "MWI",iso2: "MW",name: "Malawi"},
{iso3: "MYS",iso2: "MY",name: "Malaysia"},
{iso3: "MDV",iso2: "MV",name: "Maldives"},
{iso3: "MLI",iso2: "ML",name: "Mali"},
{iso3: "MLT",iso2: "MT",name: "Malta"},
{iso3: "MHL",iso2: "MH",name: "Marshall Islands"},
{iso3: "MTQ",iso2: "MQ",name: "Martinique"},
{iso3: "MRT",iso2: "MR",name: "Mauritania"},
{iso3: "MUS",iso2: "MU",name: "Mauritius"},
{iso3: "MYT",iso2: "YT",name: "Mayotte"},
{iso3: "MEX",iso2: "MX",name: "Mexico"},
{iso3: "FSM",iso2: "FM",name: "Micronesia, Federated States of"},
{iso3: "MDA",iso2: "MD",name: "Moldova, Republic of"},
{iso3: "MCO",iso2: "MC",name: "Monaco"},
{iso3: "MNG",iso2: "MN",name: "Mongolia"},
{iso3: "MNE",iso2: "ME",name: "Montenegro"},
{iso3: "MSR",iso2: "MS",name: "Montserrat"},
{iso3: "MAR",iso2: "MA",name: "Morocco"},
{iso3: "MOZ",iso2: "MZ",name: "Mozambique"},
{iso3: "MMR",iso2: "MM",name: "Myanmar"},
{iso3: "MMR",iso2: "MM",name: "Burma"},
{iso3: "NAM",iso2: "NA",name: "Namibia"},
{iso3: "NRU",iso2: "NR",name: "Nauru"},
{iso3: "NPL",iso2: "NP",name: "Nepal"},
{iso3: "NLD",iso2: "NL",name: "Netherlands"},
{iso3: "ANT",iso2: "AN",name: "Netherlands Antilles"},
{iso3: "NCL",iso2: "NC",name: "New Caledonia"},
{iso3: "NZL",iso2: "NZ",name: "New Zealand"},
{iso3: "NIC",iso2: "NI",name: "Nicaragua"},
{iso3: "NER",iso2: "NE",name: "Niger"},
{iso3: "NGA",iso2: "NG",name: "Nigeria"},
{iso3: "NIU",iso2: "NU",name: "Niue"},
{iso3: "NFK",iso2: "NF",name: "Norfolk Island"},
{iso3: "MNP",iso2: "MP",name: "Northern Mariana Islands"},
{iso3: "NOR",iso2: "NO",name: "Norway"},
{iso3: "OMN",iso2: "OM",name: "Oman"},
{iso3: "PAK",iso2: "PK",name: "Pakistan"},
{iso3: "PLW",iso2: "PW",name: "Palau"},
{iso3: "PSE",iso2: "PS",name: "Palestinian Territory, Occupied"},
{iso3: "PAN",iso2: "PA",name: "Panama"},
{iso3: "PNG",iso2: "PG",name: "Papua New Guinea"},
{iso3: "PRY",iso2: "PY",name: "Paraguay"},
{iso3: "PER",iso2: "PE",name: "Peru"},
{iso3: "PHL",iso2: "PH",name: "Philippines"},
{iso3: "PCN",iso2: "PN",name: "Pitcairn"},
{iso3: "POL",iso2: "PL",name: "Poland"},
{iso3: "PRT",iso2: "PT",name: "Portugal"},
{iso3: "PRI",iso2: "PR",name: "Puerto Rico"},
{iso3: "QAT",iso2: "QA",name: "Qatar"},
{iso3: "REU",iso2: "RE",name: "Réunion"},
{iso3: "ROU",iso2: "RO",name: "Romania"},
{iso3: "RUS",iso2: "RU",name: "Russian Federation"},
{iso3: "RUS",iso2: "RU",name: "Russia"},
{iso3: "RWA",iso2: "RW",name: "Rwanda"},
{iso3: "SHN",iso2: "SH",name: "Saint Helena, Ascension and Tristan da Cunha"},
{iso3: "KNA",iso2: "KN",name: "Saint Kitts and Nevis"},
{iso3: "LCA",iso2: "LC",name: "Saint Lucia"},
{iso3: "SPM",iso2: "PM",name: "Saint Pierre and Miquelon"},
{iso3: "VCT",iso2: "VC",name: "Saint Vincent and the Grenadines"},
{iso3: "VCT",iso2: "VC",name: "Saint Vincent & the Grenadines"},
{iso3: "VCT",iso2: "VC",name: "St. Vincent and the Grenadines"},
{iso3: "WSM",iso2: "WS",name: "Samoa"},
{iso3: "SMR",iso2: "SM",name: "San Marino"},
{iso3: "STP",iso2: "ST",name: "Sao Tome and Principe"},
{iso3: "SAU",iso2: "SA",name: "Saudi Arabia"},
{iso3: "SEN",iso2: "SN",name: "Senegal"},
{iso3: "SRB",iso2: "RS",name: "Serbia"},
{iso3: "SYC",iso2: "SC",name: "Seychelles"},
{iso3: "SLE",iso2: "SL",name: "Sierra Leone"},
{iso3: "SGP",iso2: "SG",name: "Singapore"},
{iso3: "SVK",iso2: "SK",name: "Slovakia"},
{iso3: "SVN",iso2: "SI",name: "Slovenia"},
{iso3: "SLB",iso2: "SB",name: "Solomon Islands"},
{iso3: "SOM",iso2: "SO",name: "Somalia"},
{iso3: "ZAF",iso2: "ZA",name: "South Africa"},
{iso3: "SGS",iso2: "GS",name: "South Georgia and the South Sandwich Islands"},
{iso3: "SSD",iso2: "SS",name: "South Sudan"},
{iso3: "ESP",iso2: "ES",name: "Spain"},
{iso3: "LKA",iso2: "LK",name: "Sri Lanka"},
{iso3: "SDN",iso2: "SD",name: "Sudan"},
{iso3: "SUR",iso2: "SR",name: "Suriname"},
{iso3: "SJM",iso2: "SJ",name: "Svalbard and Jan Mayen"},
{iso3: "SWZ",iso2: "SZ",name: "Swaziland"},
{iso3: "SWE",iso2: "SE",name: "Sweden"},
{iso3: "CHE",iso2: "CH",name: "Switzerland"},
{iso3: "SYR",iso2: "SY",name: "Syrian Arab Republic"},
{iso3: "TWN",iso2: "TW",name: "Taiwan, Province of China"},
{iso3: "TWN",iso2: "TW",name: "Taiwan"},
{iso3: "TJK",iso2: "TJ",name: "Tajikistan"},
{iso3: "TZA",iso2: "TZ",name: "Tanzania, United Republic of"},
{iso3: "THA",iso2: "TH",name: "Thailand"},
{iso3: "TLS",iso2: "TL",name: "Timor-Leste"},
{iso3: "TGO",iso2: "TG",name: "Togo"},
{iso3: "TKL",iso2: "TK",name: "Tokelau"},
{iso3: "TON",iso2: "TO",name: "Tonga"},
{iso3: "TTO",iso2: "TT",name: "Trinidad and Tobago"},
{iso3: "TTO",iso2: "TT",name: "Trinidad & Tobago"},
{iso3: "TUN",iso2: "TN",name: "Tunisia"},
{iso3: "TUR",iso2: "TR",name: "Turkey"},
{iso3: "TKM",iso2: "TM",name: "Turkmenistan"},
{iso3: "TCA",iso2: "TC",name: "Turks and Caicos Islands"},
{iso3: "TUV",iso2: "TV",name: "Tuvalu"},
{iso3: "UGA",iso2: "UG",name: "Uganda"},
{iso3: "UKR",iso2: "UA",name: "Ukraine"},
{iso3: "ARE",iso2: "AE",name: "United Arab Emirates"},
{iso3: "GBR",iso2: "GB",name: "United Kingdom"},
{iso3: "USA",iso2: "US",name: "United States of America"},
{iso3: "UMI",iso2: "UM",name: "United States Minor Outlying Islands"},
{iso3: "URY",iso2: "UY",name: "Uruguay"},
{iso3: "UZB",iso2: "UZ",name: "Uzbekistan"},
{iso3: "VUT",iso2: "VU",name: "Vanuatu"},
{iso3: "VEN",iso2: "VE",name: "Venezuela, Bolivarian Republic of"},
{iso3: "VEN",iso2: "VE",name: "Venezuela"},
{iso3: "VNM",iso2: "VN",name: "Viet Nam"},
{iso3: "VNM",iso2: "VN",name: "Vietnam"},
{iso3: "VGB",iso2: "VG",name: "Virgin Islands, British"},
{iso3: "VIR",iso2: "VI",name: "Virgin Islands, U.S."},
{iso3: "WLF",iso2: "WF",name: "Wallis and Futuna"},
{iso3: "ESH",iso2: "EH",name: "Western Sahara"},
{iso3: "YEM",iso2: "YE",name: "Yemen"},
{iso3: "ZMB",iso2: "ZM",name: "Zambia"},
{iso3: "ZWE",iso2: "ZW",name: "Zimbabwe"}
]

//Creating formatted date.
var lastDate = new Date();
var day = lastDate.getDay()+2;
var month = lastDate.getMonth() + 1;
var year = lastDate.getFullYear();
var stringDay;
var stringURL;
var stringMonth;
if (day < 10) {
  stringDay = "0" + day;
  stringURL = "0" + (day + 2);
} else {
  stringDay = day;
  stringURL = day + 2;
}
if (month < 10) {
  stringMonth = "0" + month;
}

var currentDate = year + "-" + stringMonth + "-" + stringDay;

//this function is used to pull a parameter from the url. This is passed from the map or adding when the drop down is selected.
var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};

//this function add the country id to the url when changed.
function myFunction() {
  var x = document.getElementById("countries").value;
  window.location.replace("countrydata.html?id="+x);
}

//Loads the data charts.
am4core.ready(function() {

	//setting api request data.
	var apiData = {
		"async": true,
		"crossDomain": true,
		"url": "https://covidapi.info/api/v1/global/timeseries/2020-01-10/" + currentDate,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "who-covid-19-data.p.rapidapi.com",
			"x-rapidapi-key": "38d6996a9emsh912de85060ef640p1876e5jsn4639a20493f8"
		}
	}
	
	//Ajax call to pull data into site.
	$.ajax(apiData).done(function (response) {
	
		//Formatting data for charts
		for (const [key, value] of Object.entries(isoCodes)) {
			$('#countries').append('<option value="' + value.iso3 + '">' + value.name + '</option>');	
		}
		
		//pulling para from the url.
		var iso3 = getParams(window.location.href);
		//setting the para as the dropdown list value.
		var myOption = document.getElementById('countries').querySelector('option[value="' + iso3.id + '"]').index;
		$("#countries").prop('selectedIndex',myOption);
		var apiCallData = [];
		apiCallData = response.result;
		
		//removing 0 values.
		for (var [key, value] of Object.entries(apiCallData)) {
			for(var i = value.length - 1; i >= 0; i--){
				if(value[i].confirmed == 0){
				  value.splice(i, 1);
				}
				if (value.length == 0) {
				delete apiCallData[key];
				}
			}
		}
		
		//array to hold chart values.
		var chartSeries = [];
		
		//pushing values from api data to chart series.
		for (var [key, value] of Object.entries(apiCallData)) {
			//console.log(key);
			if (key == iso3.id) {
				for (var i = 0; i < value.length; i++) {
					chartSeries.push(value[i]);
				}
			}
		}
	
		am4core.useTheme(am4themes_animated);

		// Create chart instance
		var chartConfirmed = am4core.create("countryChartConfirmed", am4charts.XYChart);
		chartConfirmed.paddingRight = 25;
		chartConfirmed.data = chartSeries;
		
		var chartDeaths = am4core.create("countryChartDeaths", am4charts.XYChart);
		chartDeaths.paddingRight = 25;
		chartDeaths.data = chartSeries;
		
		var chartRecovered = am4core.create("countryChartRecovered", am4charts.XYChart);
		chartRecovered.paddingRight = 25;
		chartRecovered.data = chartSeries;
		
		// Confirmed Chart
		var dateAxis = chartConfirmed.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.grid.template.disabled = true;
		dateAxis.renderer.labels.template.disabled = true;

		var range0101 = dateAxis.axisRanges.create();
		range0101.date = new Date(chartSeries[0].date);
		range0101.label.text = chartSeries[0].date;

		var range0108 = dateAxis.axisRanges.create();
		range0108.date = new Date(chartSeries[chartSeries.length-1].date);
		range0108.label.text = chartSeries[chartSeries.length-1].date;

		var valueAxis = chartConfirmed.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.grid.template.disabled = true;
		valueAxis.renderer.labels.template.disabled = true;
		valueAxis.min = 0;

		var range0 = valueAxis.axisRanges.create();
		range0.value = 0;
		range0.label.text = "0";

		var range500 = valueAxis.axisRanges.create();
		range500.value = chartSeries[chartSeries.length-1].confirmed / 2;
		range500.label.text = chartSeries[chartSeries.length-1].confirmed / 2;

		var range1000 = valueAxis.axisRanges.create();
		range1000.value = chartSeries[chartSeries.length-1].confirmed;
		range1000.label.text = chartSeries[chartSeries.length-1].confirmed;
		
		// Death Chart
		var dateAxisDeath = chartDeaths.xAxes.push(new am4charts.DateAxis());
		dateAxisDeath.renderer.grid.template.disabled = true;
		dateAxisDeath.renderer.labels.template.disabled = true;

		var range0101Death = dateAxisDeath.axisRanges.create();
		range0101Death.date = new Date(chartSeries[0].date);
		range0101Death.label.text = chartSeries[0].date;

		var range0108Death = dateAxisDeath.axisRanges.create();
		range0108Death.date = new Date(chartSeries[chartSeries.length-1].date);
		range0108Death.label.text = chartSeries[chartSeries.length-1].date;

		var valueAxisDeath = chartDeaths.yAxes.push(new am4charts.ValueAxis());
		valueAxisDeath.renderer.grid.template.disabled = true;
		valueAxisDeath.renderer.labels.template.disabled = true;
		valueAxisDeath.min = 0;

		var rangeDeath = valueAxisDeath.axisRanges.create();
		rangeDeath.value = 0;
		rangeDeath.label.text = "0";

		var range500Death = valueAxisDeath.axisRanges.create();
		range500Death.value = chartSeries[chartSeries.length-1].deaths / 2;
		range500Death.label.text = chartSeries[chartSeries.length-1].deaths / 2;

		var range1000Death = valueAxisDeath.axisRanges.create();
		range1000Death.value = chartSeries[chartSeries.length-1].deaths;
		range1000Death.label.text = chartSeries[chartSeries.length-1].deaths;
		
		// Recovered Chart
		var dateAxisRecovered = chartRecovered.xAxes.push(new am4charts.DateAxis());
		dateAxisRecovered.renderer.grid.template.disabled = true;
		dateAxisRecovered.renderer.labels.template.disabled = true;

		var range0101Recovered = dateAxisRecovered.axisRanges.create();
		range0101Recovered.date = new Date(chartSeries[0].date);
		range0101Recovered.label.text = chartSeries[0].date;

		var range0108Recovered = dateAxisRecovered.axisRanges.create();
		range0108Recovered.date = new Date(chartSeries[chartSeries.length-1].date);
		range0108Recovered.label.text = chartSeries[chartSeries.length-1].date;

		var valueAxisRecovered = chartRecovered.yAxes.push(new am4charts.ValueAxis());
		valueAxisRecovered.renderer.grid.template.disabled = true;
		valueAxisRecovered.renderer.labels.template.disabled = true;
		valueAxisRecovered.min = 0;

		var range0Recovered = valueAxisRecovered.axisRanges.create();
		range0Recovered.value = 0;
		range0Recovered.label.text = "0";

		var range500Recovered = valueAxisRecovered.axisRanges.create();
		range500Recovered.value = chartSeries[chartSeries.length-1].recovered / 2;
		range500Recovered.label.text = chartSeries[chartSeries.length-1].recovered / 2;

		var range1000Recovered = valueAxisRecovered.axisRanges.create();
		range1000Recovered.value = chartSeries[chartSeries.length-1].recovered;
		range1000Recovered.label.text = chartSeries[chartSeries.length-1].recovered;

		// Create series
		function createSeries(field, name, chart) {
			var series = chart.series.push(new am4charts.LineSeries());
			series.dataFields.valueY = field;
			series.dataFields.dateX = "date";
			series.name = name;
			series.tooltipText = "{dateX}: [b]{valueY}[/]";
			series.strokeWidth = 2;
			var bullet = series.bullets.push(new am4charts.CircleBullet());
			if (chart == chartConfirmed) {
				bullet.circle.stroke = am4core.color("blue");
				bullet.circle.strokeWidth = 2;
			} else if (chart == chartDeaths) {
				bullet.circle.stroke = am4core.color("red");
				bullet.circle.strokeWidth = 2;
			} else if (chart == chartRecovered) {
				bullet.circle.stroke = am4core.color("green");
				bullet.circle.strokeWidth = 2;
			}
			return series;
		}

		createSeries("confirmed", "Confirmed Cases", chartConfirmed);
		chartConfirmed.legend = new am4charts.Legend();
		chartConfirmed.cursor = new am4charts.XYCursor();
		
		createSeries("deaths", "Deceased Cases", chartDeaths);
		chartDeaths.legend = new am4charts.Legend();
		chartDeaths.cursor = new am4charts.XYCursor();
		
		createSeries("recovered", "Recovered Cases", chartRecovered);
		chartRecovered.legend = new am4charts.Legend();
		chartRecovered.cursor = new am4charts.XYCursor();
	});

});

