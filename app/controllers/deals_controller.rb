class DealsController < ApplicationController
  def index
    @deals = current_user.deals if user_signed_in?
  end

  def create
    @deal = Deal.new(params[:deal])

  end
end
