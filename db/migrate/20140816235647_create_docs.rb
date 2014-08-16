class CreateDocs < ActiveRecord::Migration
  def change
    create_table :docs do |t|
      t.string :name
      t.integer :deal_id

      t.timestamps
    end
  end
end
