class CreateDocumentUsers < ActiveRecord::Migration
  def change
    create_table :document_users do |t|
      t.integer :document_id
      t.integer :user_id
      t.datetime :signed_at

      t.timestamps
    end
  end
end
