#!/usr/bin/env ruby


product_list = [
	{
		brand: "Tama",
		model: "Starclassic Bubinga Snare",
		condition: "good",
		year: 1999,
		finish: "red",
		title: "Tama Starclassic Snare",
		price: 500,
		shipping_price: 25,
		made_in: "DE",
		category: "3",
		description: "Tama Starclassic Bubinga Snare",
		photo_name: 'tama-bubinga.jpg'
	},
	{
		brand: "Mapex",
		model: "Daisy Cutter",
		condition: "excellent",
		year: 2015,
		finish: "steel",
		title: "Mapex Daisy Cutter",
		price: 150,
		shipping_price: 25,
		made_in: "US",
		category: "3",
		description: "Daisy cutter",
		photo_name: 'daisy-cutter.jpg'
	},
	{
		brand: "Ludwig",
		model: "Supra",
		condition: "excellent",
		year: 2015,
		finish: "Aluminium",
		title: "Supraphonic",
		price: 150,
		shipping_price: 20,
		made_in: "US",
		category: "3",
		description: "Supra",
		photo_name: 'supra.jpg'
	},
	{
		brand: "Paiste",
		model: "Dark Hi-Hats",
		condition: "mint",
		year: 2010,
		finish: "traditional",
		title: "Paiste Dark Hi-Hats",
		price: 350,
		shipping_price: 15,
		made_in: "US",
		category: "7",
		description: "A nice set of Paister Dark Hi-Hats",
		photo_name: 'paiste-dark-hi-hats.jpg'
	},
	{
		brand: "Zildjian",
		model: "New Beats",
		condition: "good",
		year: 2015,
		finish: "traditional",
		title: "Zildjian New Beats",
		price: 200,
		shipping_price: 50,
		made_in: "US",
		category: "7",
		description: "Zildjian hi-hats",
		photo_name: 'new-beats.jpg'
	},
	{
		brand: "Sabian",
		model: "Holy China",
		condition: "fair",
		year: 2000,
		finish: "brilliant",
		title: "Holy China",
		price: 250,
		shipping_price: 10,
		made_in: "US",
		category: "8",
		description: "Kick ass china cymbal.",
		photo_name: 'holy-china.jpg'
	},
	{
		brand: "Meinl",
		model: "Extra Dry Dual-Hats",
		condition: "great",
		year: 2018,
		finish: "",
		title: 'Meinl 15" Extra Dry Dual Hi-Hats ',
		price: 550,
		shipping_price: 0,
		made_in: "US",
		category: "7",
		description: 'Meinl 15" Extra Dry Dual Hi-Hats',
		photo_name: 'extra-dry-hats.jpg'
	},
	{
		brand: "Meinl",
		model: "Mike Johnston cymbal pack",
		condition: "brand new",
		year: 2018,
		finish: "varied",
		title: "Mike Johnston cymbal pack",
		price: 1199,
		shipping_price: 0,
		made_in: "US",
		category: "6",
		description: "The Meinl Mike Johnston cymbal box set contains a variety of Byzance models that Mike chooses for his standard set up when conducting lessons and performing",
		photo_name: 'mj-pack.jpg'
	},
	{
		brand: "Tama",
		model: "Starclassic Tom",
		condition: "poor",
		year: 2000,
		finish: "white",
		title: "Tama Starclassic Tom",
		price: 225,
		shipping_price: 0,
		made_in: "US",
		category: "4",
		description: "A tama starclassic tom in white.",
		photo_name: 'tama-tom.jpg'
	},
	{
		brand: "Mapex",
		model: "Armory Tom",
		condition: "good",
		year: 2018,
		finish: "walnut",
		title: "Mapex armory tom",
		price: 225,
		shipping_price: 25,
		made_in: "DE",
		category: "4",
		description: "Mapex tom in walnut",
		photo_name: 'mapex-tom.jpg'
	},
	{
		brand: "Ludwig",
		model: "Vistalite Kick",
		condition: "good",
		year: 1970,
		finish: "Tequila Sunrise",
		title: "Ludwig Vistalite Kick in Tequila Sunrise",
		price: 500,
		shipping_price: 50,
		made_in: "US",
		category: "1",
		description: "Ludwig Vistalite Kick in Tequila Sunrise",
		photo_name: 'vistalite-kick.jpg'
	},
	{
		brand: "Paiste",
		model: "22 inch 2002 ride",
		condition: "good",
		year: 2010,
		finish: "brilliant",
		title: "Paiste 22 inch 2002 ride",
		price: 300,
		shipping_price: 15,
		made_in: "DE",
		category: "9",
		description: "Paiste 22 inch 2002 ride",
		photo_name: 'paiste-22-ride-2002.jpg'
	},
	{
		brand: "Meinl",
		model: '20" Byzance Extra Thin Hammered Crash',
		condition: "brand new",
		year: 2015,
		finish: "traditional",
		title: 'Meinl 20" Byzance Extra Thin Hammered Crash',
		price: 500,
		shipping_price: 0,
		made_in: "US",
		category: "5",
		description: 'Meinl 20" Byzance Extra Thin Hammered Crash - AKA Thunder Butter',
		photo_name: 'thunder-butter.jpg'
	},
	{
		brand: "Meinl",
		model: 'Byzance 14" dark hi-hats',
		condition: "very good",
		year: 2017,
		finish: "dark",
		title: 'Meinl Byzance 14" dark hi-hats',
		price: 350,
		shipping_price: 25,
		made_in: "US",
		category: "7",
		description: 'Meinl Byzance 14" dark hi-hats',
		photo_name: 'meinl-byzance-dark-14-hihat.jpg'
	},
	{
		brand: "Tama",
		model: "Bell Brass Snare",
		condition: "good",
		year: 1990,
		finish: "Bronze",
		title: "Tama Bell Brass Snare",
		price: 1000,
		shipping_price: 150,
		made_in: "US",
		category: "3",
		description: "Kick ass snare!",
		photo_name: 'tbb.jpg'
	},
	{
		brand: "Tama",
		model: "Birch/Bubinga Kit",
		condition: "excellent",
		year: 2015,
		finish: "",
		title: "Tama Birch/Bubinga Kit",
		price: 1500,
		shipping_price: 200,
		made_in: "US",
		category: "2",
		description: "Tama Birch/Bubinga Kit",
		photo_name: 'bb-kit.jpg'
	},
	{
		brand: "Sonor",
		model: "Vintage kit",
		condition: "brand new",
		year: 2018,
		finish: "Black",
		title: "Sonor Vintage Kit",
		price: 1500,
		shipping_price: 100,
		made_in: "US",
		category: "2",
		description: "Sonor Vintage Kit",
		photo_name: 'sonor-kit.jpg'
	},

]

product_list.each do |product|
  p = Product.new( brand: product[:brand], model: product[:model], condition: product[:condition], year: product[:year], finish: product[:finish], title: product[:title], price: product[:price], shipping_price: product[:shipping_price], made_in: product[:made_in], category: product[:category], description: product[:description])

  p.product_images = [ProductImage.new(photo: File.open(File.join(Rails.root, 'db', 'fixtures', "#{product[:photo_name]}" )))]

  p.save
end


