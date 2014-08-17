class Doc < ActiveRecord::Base
  belongs_to :deal
  #filepicker_url, aws_url, deal_id, name, header
  attr_accessor :filepicker_urls
end
