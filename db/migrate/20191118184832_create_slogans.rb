class CreateSlogans < ActiveRecord::Migration[6.0]
  def change
    create_table :slogans do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :slogan

      t.timestamps
    end
  end
end
