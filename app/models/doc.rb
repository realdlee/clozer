class Doc < ActiveRecord::Base
  belongs_to :deal
  attr_accessor :filepicker_urls
end
