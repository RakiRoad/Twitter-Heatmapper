//DEFINES WHAT WEBPAGE TO LOAD
FlowRouter.route('/',{
    name: 'Home',
    action() {
        BlazeLayout.render('MainLayout', {main:'destination1'});
    }
});

FlowRouter.route('/heatmap',{
    name: 'Heatmap',
    action() {
        BlazeLayout.render('GHeatMap');
    }
});