# #!/usr/bin/env ruby

product_list = [
  [ "Ludwig Supraphonic", "A kick ass snare drum", 250, "https://images.reverb.com/image/upload/s--4hiZ4HXM--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1530041709/wvvn1qp1nksxps7bvijb.jpg", "Ludwig", "Supraphonic", "Excellent", 2009, "Chrome over aluminium", "Snare drum", "USA"],
  [ "Ludwig Black Beauty", "A kick ass snare drum", 500, "https://images.reverb.com/image/upload/s--Nl64Y4UW--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1522164558/fjurmgnly5opy3rawgxa.jpg", "Ludwig", "Black Beauty", "Excellent", 2009, "Black nickel over brass", "Snare drum", "USA" ],
  [ "Tama Bell Brass", "A kick ass snare drum", 1000, "https://images.reverb.com/image/upload/s--yguQ131---/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1480372000/jwv0k6osxnhhioalun1k.jpg"],
  [ "Ludwig Acrolite", "A kick ass snare drum", 150, "https://images.reverb.com/image/upload/s--2t_K9848--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1439584940/ooocarjizlnh55oisjk9.jpg", "Ludwig", "Acrolite", "Excellent", 2009, "Black aluminium", "Snare drum", "USA" ],
  [ "Mapex Daisy Cutter", "A kick ass snare drum", 200, "https://images.reverb.com/image/upload/s--OZ8d3sGX--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1531980605/ajhi6yqj1ezs5l1greu5.jpg" ],
  [ "Paiste 2002 Hi-Hats 14 inch", "Some sweet hats!", 175, "https://images.reverb.com/image/upload/s--px-gvZ3O--/a_90/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1531408475/xyvteaqoasrqzwbmh7im.jpg" ],
  [ "Meinl Byzance Traditional Hi-Hats 14 inch", "Some sweet hats!", 230, "https://images.reverb.com/image/upload/s--bTDGyljw--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1488665230/ytqcjkgbfassxvexmby3.jpg" ],
  [ "Sabian HHX Hi-Hats 14 inch", "Some sweet hats!", 225, "https://images.reverb.com/image/upload/s--bnhhFOan--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1529892398/qgs1ll5qlabhgg7bn58k.jpg" ],
  [ "Paiste Giant Beats Hi-Hats 15 inch", "Some sweet hats!", 200, "https://images.reverb.com/image/upload/s--5MSDmx1s--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1510873272/blul1ornm3ftszl8n5rt.jpg" ],
  [ "Meinl Dual Hi-Hats 15 inch", "Some sweet hats!", 300, "https://images.reverb.com/image/upload/s--zL-BGuMj--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1513895640/lw6zcaoqhw5ziymmti1r.jpg"]
]

product_list.each do |title, description, price, image_url, brand, model, condition, year, finish, category, made_in|
  Product.create( title: title, description: description, price: price, image_url: image_url, brand: brand, model: model, condition: condition, year: year, finish: finish, category: category, made_in: made_in)
end
