module Api
  class TemplatesController < ApiController
    before_action :set_template, only: [:show, :edit, :update, :destroy]

    # GET /templates
    # GET /templates.json
    def index
      @templates = Template.all
      render json: @templates
    end

    # GET /templates/1
    # GET /templates/1.json
    def show
      render json: @template
    end

    # GET /templates/new
    def new
      @template = Template.new
      render json: @template
    end

    # GET /templates/1/edit
    def edit
    end

    # POST /templates
    # POST /templates.json
    def create
      @template = Template.new(template_params)
      
      if @template.save
        render json: @template
      else
        format.json { render json: @template.errors, status: :unprocessable_entity }
      end
    end

    # PATCH/PUT /templates/1
    # PATCH/PUT /templates/1.json
    def update
      if @template.update(template_params)
        format.json { render :show, status: :ok, location: @template }
      else
        format.json { render json: @template.errors, status: :unprocessable_entity }
      end
    end

    # DELETE /templates/1
    # DELETE /templates/1.json
    def destroy
      @template.destroy
      format.json { head :no_content }
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_template
        @template = Template.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def template_params

        params.require(:template).permit(:name, :channel, :text)
      end
  end
end