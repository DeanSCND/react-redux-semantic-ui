module Api

  class OutreachesController < ApiController
    before_action :set_outreach, only: [:show, :edit, :update, :destroy]

    # GET /outreaches
    # GET /outreaches.json
    def index
      @outreaches = Outreach.all
      render json: @outreaches
    end

    # GET /outreaches/1
    # GET /outreaches/1.json
    def show
      render json: @outreach
    end

    # GET /outreaches/new
    def new
      @outreach = Outreach.new
      render json: @outreach
    end

    # GET /outreaches/1/edit
    def edit
    end

    # POST /outreaches
    # POST /outreaches.json
    def create
      @outreach = Outreach.new(outreach_params)
      if @outreach.save
        render json: @outreach
      else
        format.json { render json: @outreach.errors, status: :unprocessable_entity }
      end
    end

    # PATCH/PUT /outreaches/1
    # PATCH/PUT /outreaches/1.json
    def update
      if @outreach.update(outreach_params)
        render json: @outreach
      else
        format.json { render json: @outreach.errors, status: :unprocessable_entity }
      end
    end

    # DELETE /outreaches/1
    # DELETE /outreaches/1.json
    def destroy
      @outreach.destroy
      format.json { head :no_content }
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_outreach
        @outreach = Outreach.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def outreach_params
        params.require(:outreach).permit(:name, :message)
      end
  end
end