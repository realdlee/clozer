module ApplicationHelper
  def pretty_descriptive_date(date)
    date.strftime("%B %-1d, %Y")
  end
end
