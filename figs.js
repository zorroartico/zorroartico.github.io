function openMetadata(type, fig_number) {
    
    const gis_fig_info = [
                            ['These maps show the actual paths of hurricane Matthew (2016) and Hazel (1954).', 
                            "NOAA's International Best Track Archive for Climate Stewardship (IBTrACS) data, accessed on 8.27.2022", 
                            'Python'], 
                            ['This is an animated daily mean composite for air temperature at 1000mb, recreated in python. It is animated over the first day of March, April, May, June, and July 2022. It can be seen that the red zones are going up towards north as months pass.', 
                            'Daily Mean Composites from Physical Science Laboratory, NOAA.',
                            'Python'], 
                            ['An animated GDPS dewpoint temperature from 8.28.2022 to 8.31.2022 (forecasted).',
                            'Environment and Climate Change Canada.',
                            'QGIS, Python'],
                            ['A weather station map for Southern Ontario on 10.25.2022 at 250000Z. Red number is temperature and green number is dew point temperature (both in degrees Celsius).', 'Iowa State University IEM ASOS Network.', 'Python'],
                            ['This is a weather dashboard that is regularly updated. It features weather data from ECCC.', 'Environment and Climate Change Canada.', 'Leaflet, Bootstrap, HTML, CSS']
                                ];

    const stat_fig_info = [
                            ['This is an infographic that shows a comparison of meteorological parameters of hurricane Matthew (2016) and Irma (2017). The upper part of the graphs shows a relationship between maximum sustained wind speed and central pressure. The bottom part shows a density curve indicating frequencies of central pressure for each hurricane.',
                            "NOAA's International Best Track Archive for Climate Stewardship (IBTrACS) data, accessed on 8.27.2022",
                            'Python, R'],
                            ['This is an infographic that shows an inferential statistical analysis on the comparison of maximum air temperature for July 2021 and July 2022 in London ON.',
                            'Historical Data from Environment and Climate Change Canada.',
                            'R'],
                            ['This is a neural network, historgram, and scatterplot matrix created with a dummy dataset which I made with random numbers for fun. In this example, it shows a dataset containing four types of new plant species discovered on an exoplanet called "Chocolate". I divided fruit sizes with some conditions, so the fruit size column looks relatively organized than the other two row in front. Doing this type of exercise can be a fun way to learn about how to code complicated plots. This might come in handy when doing the actual gardening.', 'My random numbers.', 'R']
                                ];
                                
    const design_fig_info = [
                            ['A poster about Fusarium wilt, also known as Panama Disease, which affects Cavendish bananas that could lead to less production of bananas in the future. The virus that was a predecessor of Fusarium wilt has been the leading cause for the demise of Gros Michel banana species.'],
                            ['A poster that is about securing access to a house. The green background symbolizes security and the white circle is added behind the house to make it more contrasting with the overall background.'],
                            ['A King Cherry garden. King Cherry is a native species of Korea, especially in Jeju Island. The original purpose of this image was to practice low-poly modelling of shapes.'],
                            ['An airplane with a three-blade rotor that is about to takeoff facing headwind from the opposite direction. This image was also designed with a low-poly modelling technique.']
                                ]; 

    if (type == 'gis') {
        switch (fig_number) {
            case 1:
               document.write('<div class="div-center-caption" id="metadata' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + gis_fig_info[0][0] + '</td></tr><tr><th>Data Source</th><th>Tools</th></tr><tr><td>' + gis_fig_info[0][1] + '</td><td>' + gis_fig_info[0][2] + '</td></tr><tr></tr></table></div><br>');
               break;
            case 2:
                document.write('<div class="div-center-caption" id="metadata' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + gis_fig_info[1][0] + '</td></tr><tr><th>Data Source</th><th>Tools</th></tr><tr><td>' + gis_fig_info[1][1] + '</td><td>' + gis_fig_info[1][2] + '</td></tr><tr></tr></table></div><br>');
                break;
            case 3:
                document.write('<div class="div-center-caption" id="metadata' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + gis_fig_info[2][0] + '</td></tr><tr><th>Data Source</th><th>Tools</th></tr><tr><td>' + gis_fig_info[2][1] + '</td><td>' + gis_fig_info[2][2] + '</td></tr><tr></tr></table></div><br>');
                break;
            case 4:
                document.write('<div class="div-center-caption" id="metadata' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + gis_fig_info[3][0] + '</td></tr><tr><th>Data Source</th><th>Tools</th></tr><tr><td>' + gis_fig_info[3][1] + '</td><td>' + gis_fig_info[3][2] + '</td></tr><tr></tr></table></div><br>');
                break;
            case 5:
                document.write('<div class="div-center-caption" id="metadata' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + gis_fig_info[4][0] + '</td></tr><tr><th>Data Source</th><th>Tools</th></tr><tr><td>' + gis_fig_info[4][1] + '</td><td>' + gis_fig_info[4][2] + '</td></tr><tr></tr></table></div><br>');
                break;     
        };
    } else if (type == 'stat') {
        switch (fig_number) {
            case 1:
                document.write('<div class="div-center-caption" id="metadata' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + stat_fig_info[0][0] + '</td></tr><tr><th>Data Source</th><th>Tools</th></tr><tr><td>' + stat_fig_info[0][1] + '</td><td>' + stat_fig_info[0][2] + '</td></tr><tr></tr></table></div><br>');
                break; 
            case 2:
                document.write('<div class="div-center-caption" id="metadata' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + stat_fig_info[1][0] + '</td></tr><tr><th>Data Source</th><th>Tools</th></tr><tr><td>' + stat_fig_info[1][1] + '</td><td>' + stat_fig_info[1][2] + '</td></tr><tr></tr></table></div><br>');
                break; 
            case 3:
                document.write('<div class="div-center-caption" id="metadata' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + stat_fig_info[2][0] + '</td></tr><tr><th>Data Source</th><th>Tools</th></tr><tr><td>' + stat_fig_info[2][1] + '</td><td>' + stat_fig_info[2][2] + '</td></tr><tr></tr></table></div><br>');
                break; 
                
        };
    } else if (type == 'design') {
        switch (fig_number) {
            case 1:
                document.write('<div class="div-center-caption-2"' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + design_fig_info[0][0] + '</td></tr></table></div><br>');
                break; 
            case 2:
                document.write('<div class="div-center-caption-2"' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + design_fig_info[1][0] + '</td></tr></table></div><br>');
                break; 
            case 3:
                document.write('<div class="div-center-caption-2"' + fig_number + '">' + '<table style="border-spacing: 30px;"><tr><th colspan="3">Description</th></tr><tr><td colspan="3">' + design_fig_info[2][0] + '</td></tr></table></div><br>');
                break; 
                
        };
    };  


}
