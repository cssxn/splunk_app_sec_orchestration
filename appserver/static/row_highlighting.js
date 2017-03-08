require([
             'underscore',
             'jquery',
             'splunkjs/mvc',
             'splunkjs/mvc/tableview',
             'splunkjs/mvc/simplexml/ready!'
         ], function(_, $, mvc, TableView) {
         
              // Row Coloring Example with custom, client-side range interpretation
         
             var CustomRangeRenderer = TableView.BaseCellRenderer.extend({
                 canRender: function(cell) {
                     // Enable this custom cell renderer for the confirm field
                     return _(['confirm']).contains(cell.field);
                 },
                 render: function($td, cell) {
                     // Add a class to the cell based on the returned value
                     var value = parseFloat(cell.value);
         
                     // Apply interpretation for number of 
                     if (cell.field === 'confirm') {
                         if (value > 1) {
                             $td.addClass('range-cell').addClass('range-elevated');
                         }
                         else {
                             $td.addClass('range-cell').addClass('range-severe');
                         }
                     }
         
                     // Apply interpretation for number of 
                     /*if (cell.field === 'confirm') {
                         if (value == 0 ) {
                             $td.addClass('range-cell').addClass('range-severe');
                         }
                     }*/
         
                     // Update the cell content
                     $td.text(value.toFixed(2)).addClass('numeric');
                 }
             });
         
             mvc.Components.get('highlight').getVisualization(function(tableView) {
                 tableView.on('rendered', function() {
                     // Apply class of the cells to the parent row in order to color the whole row
                     tableView.$el.find('td.range-cell').each(function() {
                         $(this).parents('tr').addClass(this.className);
                     });
                 });
                 // Add custom cell renderer, the table will re-render automatically.
                 tableView.addCellRenderer(new CustomRangeRenderer());
             });
         
         });
