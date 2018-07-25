class OutreachesController < ApplicationController
  before_action :set_outreach, only: [:show, :edit, :update, :destroy]
  before_action :prepare_messages
  # GET /outreaches
  # GET /outreaches.json
  def index
    @outreaches = Outreach.all
  end

  # GET /outreaches/1
  # GET /outreaches/1.json
  def show
  end

  # GET /outreaches/new
  def new
    @outreach = Outreach.new
  end

  # GET /outreaches/1/edit
  def edit
  end

  # POST /outreaches
  # POST /outreaches.json
  def create
    @outreach = Outreach.new(outreach_params)

    respond_to do |format|
      if @outreach.save
        format.html { redirect_to @outreach, notice: 'Outreach was successfully created.' }
        format.json { render :show, status: :created, location: @outreach }
      else
        format.html { render :new }
        format.json { render json: @outreach.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /outreaches/1
  # PATCH/PUT /outreaches/1.json
  def update
    respond_to do |format|
      puts "PARAMS: #{outreach_params}"

      if @outreach.update(outreach_params)
        format.html { redirect_to @outreach, notice: 'Outreach was successfully updated.' }
        format.json { render :show, status: :ok, location: @outreach }
      else
        format.html { render :edit }
        format.json { render json: @outreach.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /outreaches/1
  # DELETE /outreaches/1.json
  def destroy
    @outreach.destroy
    respond_to do |format|
      format.html { redirect_to outreaches_url, notice: 'Outreach was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_outreach
      @outreach = Outreach.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def outreach_params
      params.require(:outreach).permit(:name, :message_id)
    end

    def prepare_messages
      @messages = Message.all
    end

end
