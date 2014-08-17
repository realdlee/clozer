class Deal < ActiveRecord::Base
  belongs_to :user
  validates_presence_of :name, :user_id

  def to_param
    "#{name}".parameterize+"-#{id}"
  end
end
