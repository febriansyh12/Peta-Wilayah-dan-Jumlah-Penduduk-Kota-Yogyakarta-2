var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kepadatan_Penduduk_Kota_Yogyakarta_1 = new ol.format.GeoJSON();
var features_Kepadatan_Penduduk_Kota_Yogyakarta_1 = format_Kepadatan_Penduduk_Kota_Yogyakarta_1.readFeatures(json_Kepadatan_Penduduk_Kota_Yogyakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kepadatan_Penduduk_Kota_Yogyakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kepadatan_Penduduk_Kota_Yogyakarta_1.addFeatures(features_Kepadatan_Penduduk_Kota_Yogyakarta_1);
var lyr_Kepadatan_Penduduk_Kota_Yogyakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kepadatan_Penduduk_Kota_Yogyakarta_1, 
                style: style_Kepadatan_Penduduk_Kota_Yogyakarta_1,
                popuplayertitle: 'Kepadatan_Penduduk_Kota_Yogyakarta',
                interactive: false,
    title: 'Kepadatan_Penduduk_Kota_Yogyakarta<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_0.png" /> Danurejan<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_1.png" /> Gedongtengen<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_2.png" /> Gondokusuman<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_3.png" /> Gondomanan<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_4.png" /> Jetis<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_5.png" /> Kotagede<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_6.png" /> Kraton<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_7.png" /> Mantrijeron<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_8.png" /> Mergangsan<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_9.png" /> Ngampilan<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_10.png" /> Pakualaman<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_11.png" /> Tegalrejo<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_12.png" /> Umbulharjo<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_13.png" /> Wirobrajan<br />\
    <img src="styles/legend/Kepadatan_Penduduk_Kota_Yogyakarta_1_14.png" /> <br />' });
var format_Yogyakarta_Centroid_2 = new ol.format.GeoJSON();
var features_Yogyakarta_Centroid_2 = format_Yogyakarta_Centroid_2.readFeatures(json_Yogyakarta_Centroid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yogyakarta_Centroid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yogyakarta_Centroid_2.addFeatures(features_Yogyakarta_Centroid_2);
var lyr_Yogyakarta_Centroid_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yogyakarta_Centroid_2, 
                style: style_Yogyakarta_Centroid_2,
                popuplayertitle: 'Yogyakarta_Centroid',
                interactive: true,
                title: '<img src="styles/legend/Yogyakarta_Centroid_2.png" /> Yogyakarta_Centroid'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Kepadatan_Penduduk_Kota_Yogyakarta_1.setVisible(true);lyr_Yogyakarta_Centroid_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kepadatan_Penduduk_Kota_Yogyakarta_1,lyr_Yogyakarta_Centroid_2];
lyr_Kepadatan_Penduduk_Kota_Yogyakarta_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Join_Luas', 'Join_Pendu': 'Join_Pendu', 'Join_Kepad': 'Join_Kepad', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', 'join_yiaLa': 'join_yiaLa', 'join_yiaPe': 'join_yiaPe', 'join_yiaJu': 'join_yiaJu', });
lyr_Yogyakarta_Centroid_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Nama Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_No': 'Join_No', 'Join_Luas': 'Luas Wilayah (ha)', 'Join_Pendu': 'Jumlah Penduduk (ribu)', 'Join_Kepad': 'Kepadatan Penduduk (Ribu per km2)', 'Join_Banji': 'Join_Banji', 'Join_Cuaca': 'Join_Cuaca', 'Join_Erups': 'Join_Erups', 'Join_Gelom': 'Join_Gelom', 'Join_Gel_1': 'Join_Gel_1', 'Join_Gempa': 'Join_Gempa', 'Join_Kebak': 'Join_Kebak', 'Join_Keker': 'Join_Keker', 'Join_Tanah': 'Join_Tanah', 'join_yiaLa': 'Jumlah Laki-Laki', 'join_yiaPe': 'Jumlah Perempuan', 'join_yiaJu': 'Jumlah Total', });
lyr_Kepadatan_Penduduk_Kota_Yogyakarta_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', 'Join_No': 'TextEdit', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'TextEdit', 'Join_Cuaca': 'TextEdit', 'Join_Erups': 'TextEdit', 'Join_Gelom': 'TextEdit', 'Join_Gel_1': 'TextEdit', 'Join_Gempa': 'TextEdit', 'Join_Kebak': 'TextEdit', 'Join_Keker': 'TextEdit', 'Join_Tanah': 'TextEdit', 'join_yiaLa': 'TextEdit', 'join_yiaPe': 'TextEdit', 'join_yiaJu': 'TextEdit', });
lyr_Yogyakarta_Centroid_2.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'Hidden', 'Field': 'Hidden', 'Join_No': 'Hidden', 'Join_Luas': 'TextEdit', 'Join_Pendu': 'TextEdit', 'Join_Kepad': 'TextEdit', 'Join_Banji': 'Hidden', 'Join_Cuaca': 'Hidden', 'Join_Erups': 'Hidden', 'Join_Gelom': 'Hidden', 'Join_Gel_1': 'Hidden', 'Join_Gempa': 'Hidden', 'Join_Kebak': 'Hidden', 'Join_Keker': 'Hidden', 'Join_Tanah': 'Hidden', 'join_yiaLa': 'TextEdit', 'join_yiaPe': 'TextEdit', 'join_yiaJu': 'TextEdit', });
lyr_Kepadatan_Penduduk_Kota_Yogyakarta_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'Field': 'no label', 'Join_No': 'no label', 'Join_Luas': 'no label', 'Join_Pendu': 'no label', 'Join_Kepad': 'no label', 'Join_Banji': 'no label', 'Join_Cuaca': 'no label', 'Join_Erups': 'no label', 'Join_Gelom': 'no label', 'Join_Gel_1': 'no label', 'Join_Gempa': 'no label', 'Join_Kebak': 'no label', 'Join_Keker': 'no label', 'Join_Tanah': 'no label', 'join_yiaLa': 'no label', 'join_yiaPe': 'no label', 'join_yiaJu': 'no label', });
lyr_Yogyakarta_Centroid_2.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Luas': 'inline label - always visible', 'Join_Pendu': 'inline label - always visible', 'Join_Kepad': 'inline label - always visible', 'join_yiaLa': 'inline label - always visible', 'join_yiaPe': 'inline label - always visible', 'join_yiaJu': 'inline label - always visible', });
lyr_Yogyakarta_Centroid_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});