class TabsController < ApplicationController
  def new
  end

  def create
    @tab = Tab.new
    @tab.user = current_user

    @tab.update_attributes(params[:tab])

    respond_to do |format|
      json = { message: "Created tab #{@tab.song} by #{@tab.artist}" }.to_json
      format.json { render json: json }
    end
  end

  def index
    @tabs = Tab.where(user: current_user)

    respond_to do |format|
      format.json { render 'index' }
    end
  end

  def show
  end

  def update
    @tab = Tab.find(params[:id])
    @tab.update_attributes(params[:tab])

    respond_to do |format|
      json = { message: 'Success!' }.to_json
      format.json { render json: json }
    end
  end

  def destroy
    tab = Tab.find(params[:id])
    tab.destroy

    respond_to do |format|
      format.json do
        json = { message: "Deleted tab #{tab.song} by #{tab.artist}" }.to_json
        render json: json
      end
    end
  end
end
