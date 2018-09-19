#!/usr/bin/env ruby


product_list = [
	{
		brand: "T",
		model: "Starclassic",
		condition: "good",
		year: 1999,
		finish: "Black",
		title: "Tama ST",
		price: 500,
		shipping_price: 25,
		made_in: "DE",
		category: "3",
		description: "Tama snare",
		photo_name: 'tama-bubinga.jpg'
	},
	{
		brand: "M",
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
	}
]

product_list.each do |product|
  p = Product.new( brand: product[:brand], model: product[:model], condition: product[:condition], year: product[:year], finish: product[:finish], title: product[:title], price: product[:price], shipping_price: product[:shipping_price], made_in: product[:made_in], category: product[:category], description: product[:description])

  p.product_images = [ProductImage.new(photo: File.open(File.join(Rails.root, 'db', 'fixtures', "#{product[:photo_name]}" )))]

  p.save
end


