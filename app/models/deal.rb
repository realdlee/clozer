class Deal < ActiveRecord::Base
  belongs_to :user
  has_many :docs
  validates_presence_of :name, :user_id

  def to_param
    "#{name}".parameterize+"-#{id}"
  end
end
