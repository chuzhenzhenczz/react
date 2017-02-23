let basket = {count: 1, onSale: 'yes'}
console.log(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);


var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script =
        `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

    return script;
}


function digest(data) {
    var supplies = data;

    viewModel={}
    var _supplies ;
    Object.defineProperty(viewModel,'supplies',{
        set:function(obj){
            rener(obj,ele,template);
            _supplies = obj;
        },
        get:function(){
            return _supplies;
        }
    })
    viewModel.supplies = supplies;

}

function rener(data, ele,template) {
    var html = eval(compile(template))(data);
    ele.innerHTML = html;
}

ele = document.querySelector('#container');
digest({supplies:['足球','篮球','平棒球','希拉里','川普','通往总统的最后一公里']});

