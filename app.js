var items = [
{ 
	title: '400 Series 71-inch Executive Desk',
	oldPrice: 1199,
	newPrice: 839,
	manufacturer: 'Unique Furniture',
	vendorName: 'YLiving',
	vendorURL: 'https://www.yliving.com/unique-furniture-400-series-71-executive-desk.html',
	style: 'Zebrano',
	imageURL: 'img/desk.png'
},
{ 
	title: '2017 65-Inch 4K HDR TV',
	oldPrice: 1800,
	newPrice: 1498,
	manufacturer: 'Sony',
	vendorName: 'Amazon',
	vendorURL: 'https://www.amazon.com/dp/B01MZF81NS/?tag=thewire06-20&linkCode=xm2&ascsubtag=AgEAAAAAAAAAALom&th=1',
	style: 'XBR65X900E',
	imageURL: 'img/tv.png'
},
{ 
	title: '2-Bay Network Attached Storage DiskStation',
	oldPrice: 300,
	newPrice: 284,
	manufacturer: 'Synology',
	vendorName: 'Newegg',
	vendorURL: 'https://www.newegg.com/Product/Product.aspx?Item=N82E16822108679R&cm_re=sinology_DS218%2b-_-22-108-679R-_-Product',
	style: 'DS218+',
	imageURL: 'img/nas.png'
},
{ 
	title: '2x Red Pro NAS 2 Terabyte Hard Drives',
	oldPrice: 185,
	newPrice: 120,
	manufacturer: 'Western Digital',
	vendorName: 'Newegg',
	vendorURL: 'https://www.newegg.com/Product/Product.aspx?item=1Z4-0002-002R5',
	imageURL: 'img/drive.png'
},
{
	title: 'Flash Xpress Toaster Oven',
	oldPrice: 140,
	newPrice: 117,
	manufacturer: 'Panasonic',
	vendorName: 'Amazon',
	vendorURL: 'https://www.amazon.com/dp/B00GMDX1WI/?tag=thewire06-20&linkCode=xm2&ascsubtag=AgEAAAAAAAAAAOXR',
	imageURL: 'img/toaster.png',
	style: 'White'
}
]

var app = new Vue({
	el: '#app',
	data: { items: items, isLoaded: false },
	mounted() {
		setTimeout(()=>{this.isLoaded = true}, 500);
	}
})