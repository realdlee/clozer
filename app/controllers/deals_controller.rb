class DealsController < ApplicationController
  def index
    @deals = current_user.deals if user_signed_in?
  end

  def show
    @deal = Deal.find(params[:id].split('-')[-1])
    if @deal.user == current_user
    else
      redirect_to root_path
    end
  end

  def create
    @deal = current_user.deals.new(deal_params)
    @deal.save
    logger.info @deal.errors.full_messages if !@deal.valid?
    redirect_to deal_path(@deal)
  end

private

  def deal_params
    params.require(:deal).permit(:name, :user_id)
  end
end
