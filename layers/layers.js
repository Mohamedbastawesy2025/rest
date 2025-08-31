var wms_layers = [];

var format_Export_Output_0 = new ol.format.GeoJSON();
var features_Export_Output_0 = format_Export_Output_0.readFeatures(json_Export_Output_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_0.addFeatures(features_Export_Output_0);
var lyr_Export_Output_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_0, 
                style: style_Export_Output_0,
                popuplayertitle: 'Export_Output',
                interactive: true,
                title: '<img src="styles/legend/Export_Output_0.png" /> Export_Output'
            });

lyr_Export_Output_0.setVisible(true);
var layersList = [lyr_Export_Output_0];
lyr_Export_Output_0.set('fieldAliases', {'Id': 'Id', 'basin': 'basin', 'parcel_num': 'parcel_num', 'path': 'path', });
lyr_Export_Output_0.set('fieldImages', {'Id': '', 'basin': '', 'parcel_num': '', 'path': '', });
lyr_Export_Output_0.set('fieldLabels', {'Id': 'no label', 'basin': 'no label', 'parcel_num': 'no label', 'path': 'inline label - visible with data', });
lyr_Export_Output_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});