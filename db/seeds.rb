# #!/usr/bin/env ruby

# require 'csv'

# COLUMNS = [
#   'ndb_no',
#   'description',
#   'water_g',
#   'kcal',
#   'protein_g',
#   'lipid_total_g',
#   'ash_g',
#   'carbohydrate_g',
#   'fiber_td_g',
#   'sugar_g',
#   'calcium_mg',
#   'iron_mg',
#   'magnesium_mg',
#   'phosphorus_mg',
#   'potassium_mg',
#   'sodium_mg',
#   'zinc_mg',
#   'copper_mg',
#   'manganese_mg',
#   'selenium_ug',
#   'vit_c_mg',
#   'thiamin_mg',
#   'riboflavin_mg',
#   'niacin_mg',
#   'panto_acid_mg',
#   'vit_b6_mg',
#   'folate_tot_ug',
#   'folic_acid_ug',
#   'food_folate_ug',
#   'folate_dfe_ug',
#   'choline_tot_mg',
#   'vit_b12_ug',
#   'vit_a_iu',
#   'vit_a_rae',
#   'retinol_ug',
#   'alpha_carot_ug',
#   'beta_carot_ug',
#   'beta_crypt_ug',
#   'lycopene_ug',
#   'lut_and_zea_ug',
#   'vit_e_mg',
#   'vit_d_ug',
#   'vit_d_iu',
#   'vit_k_ug',
#   'fa_sat_g',
#   'fa_mono_g',
#   'fa_poly_g',
#   'cholestrl_mg',
#   'gmwt_1',
#   'gmwt_desc1',
#   'gmwt_2',
#   'gmwt_desc2',
#   'refuse_pct',
# ]

# print "\nSeeding..."

# dir = File.dirname(File.expand_path(__FILE__))
# lineno = 1
# CSV.foreach(File.join(dir, 'raw-ndb.csv'), 'r:ISO8859-1') do |row|
#   lineno = $.

#   next if lineno == 1
#   print '.' if lineno % 1000 == 0

#   # Humanize descriptions
#   row[1] = row[1].capitalize.gsub(/([\,\/])\s*/, '\1 ').gsub(/\s*\&\s*/, ' \1 ')

#   entry = {}

#   COLUMNS.each_with_index do |column, idx|
#     entry[column] = row[idx]
#   end

#   Food.create!(entry)
# end

# print "done."
# print "\n#{lineno} food entries imported."

product_list = [
  [ "Ludwig Supraphonic", "A kick ass snare drum", 250 ],
  [ "Ludwig Black Beauty", "A kick ass snare drum", 500 ],
  [ "Tama Bell Brass", "A kick ass snare drum", 1000 ],
  [ "Ludwig Acrolight", "A kick ass snare drum", 150 ],
  [ "Mapex Daisy Cutter", "A kick ass snare drum", 200],
  [ "Paiste 2002 Hi-Hats 14 inch", "Some sweet hats!", 175 ],
  [ "Meinl Byzance Traditional Hi-Hats 14 inch", "Some sweet hats!", 230 ],
  [ "Sabian HHX Hi-Hats 14 inch", "Some sweet hats!", 225 ],
  [ "Paiste Giant Beats Hi-Hats 15 inch", "Some sweet hats!", 200 ],
  [ "Meinl Dual Hi-Hats 15 inch", "Some sweet hats!", 300]
]

product_list.each do |title, description, price|
  Product.create( title: title, description: description, price: price )
end
