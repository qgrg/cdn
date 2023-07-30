(function(){
var key = '__ky_library_domain_unique_id__';
var meta = {
  "namespace": "ky-echarts",
  "version": "1.0.0",
  "dependencies": {
    "react": {
      "version": ">=16.0.0"
    },
    "react-dom": {
      "version": ">16.0.0"
    }
  },
  "modules": [
    {
      "name": "Chart",
      "caption": "图表",
      "propTypes": []
    },
    {
      "name": "LineChart",
      "caption": "折线图",
      "propTypes": []
    },
    {
      "name": "BarChart",
      "caption": "柱状图",
      "propTypes": []
    },
    {
      "name": "PieChart",
      "caption": "饼图",
      "propTypes": []
    },
    {
      "name": "CandlestickChart",
      "caption": "K线图",
      "propTypes": []
    },
    {
      "name": "GaugeChart",
      "caption": "仪表盘",
      "propTypes": []
    }
  ],
  "fileInfo": {
    "script": true,
    "style": false,
    "depScript": false,
    "depStyle": false
  }
};

      if(window[key]){
        window[key].confirmLoadMeta('ky-echarts','1.0.0',meta);
      }
    
})()