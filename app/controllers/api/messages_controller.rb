module Api
  class MessagesController < ApiController
    before_action :set_message, only: [:show, :edit, :update, :destroy]
    before_action :prepare_templates
    # GET /messages
    # GET /messages.json
    def index
      @messages = Message.all
      render json: @messages
    end

    # GET /messages/1
    # GET /messages/1.json
    def show
      render json: @message
    end

    # GET /messages/new
    def new
      @message = Message.new
      render json: @message
    end

    # GET /messages/1/edit
    def edit
    end

    # POST /messages
    # POST /messages.json
    def create
      @message = Message.new(message_params)

   
      if @message.save
        render json: @message
      else
        render json: @message.errors, status: :unprocessable_entity, location: @message
      end
    end

    # PATCH/PUT /messages/1
    # PATCH/PUT /messages/1.json
    def update
      if @message.update(message_params)
        format.json { render :show, status: :ok, location: @message }
      else
        format.json { render json: @message.errors, status: :unprocessable_entity, location: @message }
      end
    end

    # DELETE /messages/1
    # DELETE /messages/1.json
    def destroy
      @message.destroy
      format.json { head :no_content }
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_message
        @message = Message.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def message_params
        params.require(:message).permit(:name, :template_id)
      end

      def prepare_templates
        @templates = Template.all
      end
  end
end