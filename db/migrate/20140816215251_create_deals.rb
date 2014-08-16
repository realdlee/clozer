class CreateDeals < ActiveRecord::Migration
  def change
    create_table :deals do |t|
      t.string :name
      t.integer :user_id
      t.boolean :open

      t.timestamps
    end
  end
end
