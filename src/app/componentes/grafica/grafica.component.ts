import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  grafica: Chart
  input1: number
  input2: number
  constructor() { }

  ngOnInit(): void {
    this.grafica = new Chart('posicionGrafica', {
      type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: "red",
					borderColor: "red",
					data: [ 1,3,5,8,7,4,8 ],
					fill: false,
				}, {
					label: 'My Second dataset',
					fill: false,
					backgroundColor: "blue",
					borderColor: "blue",
					data: [ 4,7,6,2,1,4,8 ],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			}
    })
  }

  insertarDatos(): void {
    this.grafica.data.labels.push(this.grafica.data.labels.length + 1)
    this.grafica.data.datasets[0].data.push(this.input1)
    this.grafica.data.datasets[1].data.push(this.input2)
    this.grafica.update()
  }
}
