var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_salem_1 = new ol.format.GeoJSON();
var features_salem_1 = format_salem_1.readFeatures(json_salem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_salem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_salem_1.addFeatures(features_salem_1);
var lyr_salem_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_salem_1, 
                style: style_salem_1,
                popuplayertitle: "salem",
                interactive: false,
                title: '<img src="styles/legend/salem_1.png" /> salem'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_salem_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_salem_1];
lyr_salem_1.set('fieldAliases', {'STATEFP20': 'STATEFP20', 'COUNTYFP20': 'COUNTYFP20', 'COUSUBFP20': 'COUSUBFP20', 'COUSUBNS20': 'COUSUBNS20', 'GEOID20': 'GEOID20', 'NAMELSAD20': 'NAMELSAD20', 'LSAD20': 'LSAD20', 'CLASSFP20': 'CLASSFP20', 'MTFCC20': 'MTFCC20', 'CNECTAFP20': 'CNECTAFP20', 'NECTAFP20': 'NECTAFP20', 'NCTADVFP20': 'NCTADVFP20', 'FUNCSTAT20': 'FUNCSTAT20', 'ALAND20': 'ALAND20', 'AWATER20': 'AWATER20', 'INTPTLAT20': 'INTPTLAT20', 'INTPTLON20': 'INTPTLON20', 'TOWN20': 'TOWN20', 'TOWN_ID': 'TOWN_ID', 'FIPS_STCO2': 'FIPS_STCO2', 'COUNTY20': 'COUNTY20', 'TYPE': 'TYPE', 'FOURCOLOR': 'FOURCOLOR', 'AREA_ACRES': 'AREA_ACRES', 'SQ_MILES': 'SQ_MILES', 'POP1960': 'POP1960', 'POP1970': 'POP1970', 'POP1980': 'POP1980', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'POPCH10_20': 'POPCH10_20', 'HOUSING20': 'HOUSING20', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_salem_1.set('fieldImages', {'STATEFP20': '', 'COUNTYFP20': '', 'COUSUBFP20': '', 'COUSUBNS20': '', 'GEOID20': '', 'NAMELSAD20': '', 'LSAD20': '', 'CLASSFP20': '', 'MTFCC20': '', 'CNECTAFP20': '', 'NECTAFP20': '', 'NCTADVFP20': '', 'FUNCSTAT20': '', 'ALAND20': '', 'AWATER20': '', 'INTPTLAT20': '', 'INTPTLON20': '', 'TOWN20': '', 'TOWN_ID': '', 'FIPS_STCO2': '', 'COUNTY20': '', 'TYPE': '', 'FOURCOLOR': '', 'AREA_ACRES': '', 'SQ_MILES': '', 'POP1960': '', 'POP1970': '', 'POP1980': '', 'POP1990': '', 'POP2000': '', 'POP2010': '', 'POP2020': '', 'POPCH10_20': '', 'HOUSING20': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_salem_1.set('fieldLabels', {'STATEFP20': 'no label', 'COUNTYFP20': 'no label', 'COUSUBFP20': 'no label', 'COUSUBNS20': 'no label', 'GEOID20': 'no label', 'NAMELSAD20': 'no label', 'LSAD20': 'no label', 'CLASSFP20': 'no label', 'MTFCC20': 'no label', 'CNECTAFP20': 'no label', 'NECTAFP20': 'no label', 'NCTADVFP20': 'no label', 'FUNCSTAT20': 'no label', 'ALAND20': 'no label', 'AWATER20': 'no label', 'INTPTLAT20': 'no label', 'INTPTLON20': 'no label', 'TOWN20': 'no label', 'TOWN_ID': 'no label', 'FIPS_STCO2': 'no label', 'COUNTY20': 'no label', 'TYPE': 'no label', 'FOURCOLOR': 'no label', 'AREA_ACRES': 'no label', 'SQ_MILES': 'no label', 'POP1960': 'no label', 'POP1970': 'no label', 'POP1980': 'no label', 'POP1990': 'no label', 'POP2000': 'no label', 'POP2010': 'no label', 'POP2020': 'no label', 'POPCH10_20': 'no label', 'HOUSING20': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_salem_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});