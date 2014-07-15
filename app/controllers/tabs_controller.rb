class TabsController < ApplicationController
  def new
  end

  def create
    @tab = Tab.new

    @tab.update_attributes(params[:tab])
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
  end

  def destroy
  end
end
